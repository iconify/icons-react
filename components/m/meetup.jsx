import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxvai9vpb.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxvai9vpb"/>`,
		"fallback": "ps:meetup",
	});
}

export default Component;

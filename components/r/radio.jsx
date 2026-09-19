import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfumqmb7r.css';

const viewBox = {"width":304,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfumqmb7r"/>`,
		"fallback": "ps:radio",
	});
}

export default Component;

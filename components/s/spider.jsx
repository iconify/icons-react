import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht5b96bzf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht5b96bzf"/>`,
		"fallback": "dinkie-icons:spider",
	});
}

export default Component;

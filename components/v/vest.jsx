import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moa1xfwfa.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moa1xfwfa"/>`,
		"fallback": "fa-solid:vest",
	});
}

export default Component;

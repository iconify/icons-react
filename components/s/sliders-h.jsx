import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrp22s0pt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrp22s0pt"/>`,
		"fallback": "fa-solid:sliders-h",
	});
}

export default Component;

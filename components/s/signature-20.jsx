import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrvyqicgf.css';
import '../../css/h/hxwgvtb4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrvyqicgf"/><path class="hxwgvtb4i"/>`,
		"fallback": "energy-icons:signature-20",
	});
}

export default Component;

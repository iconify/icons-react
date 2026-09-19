import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtr2jecan.css';
import '../../css/h/hom3--61e.css';
import '../../css/y/yfls4paib.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtr2jecan"/><path class="hom3--61e"/><path class="yfls4paib"/>`,
		"fallback": "formkit:uploadcloud",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o4qcegbya.css';
import '../../css/a/ao2f_wymr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o4qcegbya"/><path class="ao2f_wymr"/></g>`,
		"fallback": "streamline-flex:receipt",
	});
}

export default Component;

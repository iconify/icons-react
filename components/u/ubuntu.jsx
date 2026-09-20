import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfvl_quvy.css';
import '../../css/x/xwnqe-beb.css';
import '../../css/u/u4z7rnb1i.css';
import '../../css/c/clgcxl7va.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfvl_quvy"/><path clip-rule="evenodd" class="xwnqe-beb"/><path class="u4z7rnb1i"/><path class="clgcxl7va"/>`,
		"fallback": "openmoji:ubuntu",
	});
}

export default Component;

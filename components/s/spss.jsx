import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmuxkt6oo.css';
import '../../css/e/ervpfvb-u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmuxkt6oo"/><path class="ervpfvb-u"/>`,
		"fallback": "thesvg-color:spss",
	});
}

export default Component;

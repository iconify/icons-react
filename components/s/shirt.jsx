import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_6h7_boj.css';
import '../../css/b/bqk5lbcwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a_6h7_boj"/><path class="bqk5lbcwt"/></g>`,
		"fallback": "vadivam:shirt",
	});
}

export default Component;

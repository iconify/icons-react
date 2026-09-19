import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcs7_bcpt.css';
import '../../css/k/kvsed47hf.css';
import '../../css/u/uqfhxrrcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcs7_bcpt"/><path class="kvsed47hf"/><path class="uqfhxrrcr"/>`,
		"fallback": "formkit:shekel",
	});
}

export default Component;

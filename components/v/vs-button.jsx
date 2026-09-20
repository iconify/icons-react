import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl61pfntu.css';
import '../../css/k/k-eldqbfz.css';
import '../../css/z/zl_j7biam.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl61pfntu"/><path class="k-eldqbfz"/><path class="zl_j7biam"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:vs-button",
	});
}

export default Component;

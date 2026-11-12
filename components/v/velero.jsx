import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u035nnboi.css';
import '../../css/o/oj8vp5bxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u035nnboi"/><path class="oj8vp5bxo"/>`,
		"fallback": "selfhst:velero",
	});
}

export default Component;

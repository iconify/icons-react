import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8l-6g3bp.css';
import '../../css/q/qvj5u4bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r8l-6g3bp"/><path class="qvj5u4bny"/></g>`,
		"fallback": "tabler:mask-off",
	});
}

export default Component;

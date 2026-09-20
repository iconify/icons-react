import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgp6v5aul.css';
import '../../css/k/kb8bajbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hgp6v5aul"/><path class="kb8bajbfp"/></g>`,
		"fallback": "reicon:scan-barcode-filled",
	});
}

export default Component;

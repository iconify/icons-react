import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfvmrrbrb.css';
import '../../css/f/fnh1hbb7b.css';
import '../../css/f/f1ot_mbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ticket-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="pfvmrrbrb"/><path clip-rule="evenodd" class="fnh1hbb7b"/><path class="f1ot_mbyf"/></g></g>`,
		"fallback": "cuida:ticket-outline",
	});
}

export default Component;

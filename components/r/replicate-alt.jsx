import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/uk-av1yzc.css';
import '../../css/b/bnsnvbcnq.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="uk-av1yzc"/><path class="bnsnvbcnq"/></g>`,
		"fallback": "system-uicons:replicate-alt",
	});
}

export default Component;

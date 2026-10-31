import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvqbz_bad.css';
import '../../css/w/wm3ihnbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k xvqbz_bad"/><path class="wm-a wm3ihnbmi"/></g>`,
		"fallback": "withicons:qr-code-gloss",
	});
}

export default Component;

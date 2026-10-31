import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vyxxabdkt.css';
import '../../css/v/vb7mw4b_v.css';
import '../../css/d/d4uf2sbry.css';
import '../../css/f/f86k_4cup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vyxxabdkt"/><path class="vb7mw4b_v wm-shine"/><path class="d4uf2sbry wm-k"/><path class="f86k_4cup wm-a"/></g>`,
		"fallback": "withicons-kawaii:network",
	});
}

export default Component;

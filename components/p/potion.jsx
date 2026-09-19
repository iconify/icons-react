import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x9hzvhbnm.css';
import '../../css/f/f9iatzbed.css';
import '../../css/q/q8f4hobta.css';
import '../../css/k/k-s-wjxvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="x9hzvhbnm"/><path class="f9iatzbed"/><path class="q8f4hobta"/><path class="k-s-wjxvl"/></g>`,
		"fallback": "hugeicons:potion",
	});
}

export default Component;

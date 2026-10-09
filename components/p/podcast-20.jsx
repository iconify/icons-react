import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs5v-pa0a.css';
import '../../css/c/clh9fmvvs.css';
import '../../css/q/q_91rlk-i.css';
import '../../css/d/d28ovxb4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs5v-pa0a"/><path class="clh9fmvvs"/><path class="q_91rlk-i"/><path class="d28ovxb4j"/>`,
		"fallback": "energy-icons:podcast-20",
	});
}

export default Component;

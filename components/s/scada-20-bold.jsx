import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ickjunqdw.css';
import '../../css/o/odoplnlhz.css';
import '../../css/q/qcsxd9bfp.css';
import '../../css/q/q_pjyob8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ickjunqdw"/><path class="odoplnlhz"/><path class="qcsxd9bfp"/><path class="q_pjyob8z"/>`,
		"fallback": "energy-icons:scada-20-bold",
	});
}

export default Component;

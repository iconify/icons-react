import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny3ppybwj.css';
import '../../css/q/qbpj05spk.css';
import '../../css/u/u27z1kbcm.css';
import '../../css/n/ndm5459jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny3ppybwj"/><path class="qbpj05spk"/><path class="u27z1kbcm"/><path class="ndm5459jr"/>`,
		"fallback": "solar:smartphone-rotate-angle-outline",
	});
}

export default Component;

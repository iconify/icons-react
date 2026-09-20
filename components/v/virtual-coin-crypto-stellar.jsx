import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c7a_9wbgv.css';
import '../../css/e/ebquqybtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c7a_9wbgv"/><path class="ebquqybtc"/></g>`,
		"fallback": "streamline-ultimate:virtual-coin-crypto-stellar",
	});
}

export default Component;

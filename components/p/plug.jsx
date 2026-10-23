import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q8w-nithu.css';
import '../../css/t/tbidatbnc.css';
import '../../css/m/m0xkyab8u.css';
import '../../css/v/vqrxffvkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="q8w-nithu"/><path class="tbidatbnc"/><path class="m0xkyab8u"/><path class="vqrxffvkz"/></g>`,
		"fallback": "matita:plug",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s84xh3b1x.css';
import '../../css/n/nxxdc7ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s84xh3b1x"/><path class="nxxdc7ber"/></g>`,
		"fallback": "covid:transmission-virus-transportation",
	});
}

export default Component;

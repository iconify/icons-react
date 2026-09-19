import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mq9irnbcc.css';
import '../../css/h/hgpkc4b0w.css';
import '../../css/k/kniikcc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mq9irnbcc"/><path class="hgpkc4b0w"/><path class="kniikcc3w"/></g>`,
		"fallback": "covid:transmission-virus-handshake",
	});
}

export default Component;

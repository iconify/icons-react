import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wf0y2rbjb.css';
import '../../css/v/vxqzxrbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wf0y2rbjb"/><path class="vxqzxrbpn"/></g>`,
		"fallback": "covid:transmission-virus-human-transmit-1",
	});
}

export default Component;

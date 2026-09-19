import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ahqpqojvr.css';
import '../../css/s/swzd_qb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ahqpqojvr"/><path class="swzd_qb2i"/></g>`,
		"fallback": "covid:transmission-virus-touch-hand-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2qzx2p8y.css';
import '../../css/w/wber-hsua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h2qzx2p8y"/><path class="wber-hsua"/></g>`,
		"fallback": "hugeicons:money-not-found-01",
	});
}

export default Component;

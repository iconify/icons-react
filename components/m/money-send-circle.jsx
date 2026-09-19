import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wkm6c6j9i.css';
import '../../css/d/dkfqmgbcg.css';
import '../../css/z/zlkcfkcwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wkm6c6j9i"/><path class="dkfqmgbcg"/><path class="zlkcfkcwp"/></g>`,
		"fallback": "hugeicons:money-send-circle",
	});
}

export default Component;

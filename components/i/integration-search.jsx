import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnu9x_btz.css';
import '../../css/k/koyp8_atq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnu9x_btz"/><path class="koyp8_atq"/>`,
		"fallback": "oui:integration-search",
	});
}

export default Component;

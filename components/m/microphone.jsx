import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_67od41a.css';
import '../../css/j/jhuhxq2cd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_67od41a"/><path class="jhuhxq2cd"/>`,
		"fallback": "ooui:microphone",
	});
}

export default Component;

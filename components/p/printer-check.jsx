import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s8nttvboj.css';
import '../../css/k/kwa177bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s8nttvboj"/><path class="kwa177bbo"/></g>`,
		"fallback": "lucide:printer-check",
	});
}

export default Component;

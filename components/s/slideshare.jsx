import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tm_20acfa.css';
import '../../css/w/w3auhlb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tm_20acfa"/><path class="w3auhlb7d"/></g>`,
		"fallback": "hugeicons:slideshare",
	});
}

export default Component;

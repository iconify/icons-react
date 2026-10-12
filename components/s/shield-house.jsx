import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrzbkeb4j.css';
import '../../css/q/q1clsqbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrzbkeb4j"/><path class="q1clsqbfx"/></g>`,
		"fallback": "lucide:shield-house",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z1k8g4bdr.css';
import '../../css/y/ysnygy52z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z1k8g4bdr"/><path class="ysnygy52z"/></g>`,
		"fallback": "hugeicons:nuclear-power",
	});
}

export default Component;

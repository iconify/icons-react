import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttzw2gbcj.css';
import '../../css/d/d7hkwttlg.css';
import '../../css/r/ru-d6_b-z.css';
import '../../css/m/mu2p0mb8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttzw2gbcj"/><path clip-rule="evenodd" class="d7hkwttlg"/><path class="ru-d6_b-z"/><path clip-rule="evenodd" class="mu2p0mb8a"/></g>`,
		"fallback": "pepicons:smartphone",
	});
}

export default Component;

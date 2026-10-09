import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhk2u_byh.css';
import '../../css/k/ke0ka4ymk.css';
import '../../css/v/vdxrn18am.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhk2u_byh"/><path class="ke0ka4ymk"/><path class="vdxrn18am"/>`,
		"fallback": "energy-icons:water-wheel-48",
	});
}

export default Component;

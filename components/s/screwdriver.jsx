import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eb4pff_zd.css';
import '../../css/i/i62oecbnr.css';
import '../../css/o/oan-56bxy.css';
import '../../css/b/bg74bsbau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="eb4pff_zd"/><path class="i62oecbnr"/><path class="oan-56bxy"/><path class="bg74bsbau"/></g>`,
		"fallback": "streamline-plump-color:screwdriver",
	});
}

export default Component;

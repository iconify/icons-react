import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuj8kqcdw.css';
import '../../css/d/d33yrzbil.css';
import '../../css/l/ls49jcb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuj8kqcdw"/><path class="d33yrzbil"/><path class="ls49jcb3n"/>`,
		"fallback": "streamline-freehand:radio-antenna-handle",
	});
}

export default Component;

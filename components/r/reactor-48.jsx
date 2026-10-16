import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cht574biq.css';
import '../../css/y/yhb26obxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cht574biq"/><path class="yhb26obxy"/>`,
		"fallback": "energy-icons:reactor-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrxhsjmcx.css';
import '../../css/v/v4t3l6h1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrxhsjmcx"/><path clip-rule="evenodd" class="v4t3l6h1j"/>`,
		"fallback": "qlementine-icons:ui-panel-left-16",
	});
}

export default Component;

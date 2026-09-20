import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/v/v_3l7ibkm.css';
import '../../css/l/ltg4u5wmd.css';
import '../../css/l/l6j5z2wol.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="v_3l7ibkm"/><path class="ltg4u5wmd"/><path class="l6j5z2wol"/></g>`,
		"fallback": "streamline-stickies-color:plant-1",
	});
}

export default Component;

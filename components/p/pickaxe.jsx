import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kb54w_o9a.css';
import '../../css/v/vdb68uwas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kb54w_o9a"/><path class="vdb68uwas"/></g>`,
		"fallback": "hugeicons:pickaxe",
	});
}

export default Component;

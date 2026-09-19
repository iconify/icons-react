import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/amm3vz60d.css';
import '../../css/z/z7szs-qkm.css';
import '../../css/w/w5r3v6b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="amm3vz60d"/><path class="z7szs-qkm"/><path class="w5r3v6b7x"/></g>`,
		"fallback": "iconoir:tif-format",
	});
}

export default Component;

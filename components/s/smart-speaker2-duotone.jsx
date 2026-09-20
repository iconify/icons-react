import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1pyxgm9j.css';
import '../../css/u/uq0_eabch.css';
import '../../css/y/yz4p29iab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1pyxgm9j"/><path class="uq0_eabch"/><path class="yz4p29iab"/></g>`,
		"fallback": "reicon:smart-speaker2-duotone",
	});
}

export default Component;

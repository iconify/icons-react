import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1_ud7bjl.css';
import '../../css/x/x84gdyb8n.css';
import '../../css/y/yodkqbcpl.css';
import '../../css/r/rgj8_flnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1_ud7bjl"/><path class="x84gdyb8n"/><path class="yodkqbcpl"/><path class="rgj8_flnv"/></g>`,
		"fallback": "solar:link-broken-bold",
	});
}

export default Component;

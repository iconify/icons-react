import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayplkqblz.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7o7pybje.css';
import '../../css/s/s_sytbc_y.css';
import '../../css/v/vps93z20j.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGBCtSOchg" class="ayplkqblz"/></defs><g class="cuyn6tgcc"><path clip-rule="evenodd" class="b7o7pybje"/><use href="#SVGBCtSOchg"/><path clip-rule="evenodd" class="s_sytbc_y"/><path class="vps93z20j"/><use href="#SVGBCtSOchg" clip-rule="evenodd" class="d2kvgvbvc"/></g>`,
		"fallback": "reicon:wallet-money",
	});
}

export default Component;

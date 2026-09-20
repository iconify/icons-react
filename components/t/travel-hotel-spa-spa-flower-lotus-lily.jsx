import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r-g9tibbs.css';
import '../../css/b/b-3y8dbwi.css';
import '../../css/n/nsgiktbkq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r-g9tibbs"/><path class="b-3y8dbwi"/><path class="nsgiktbkq"/></g>`,
		"fallback": "streamline:travel-hotel-spa-spa-flower-lotus-lily",
	});
}

export default Component;

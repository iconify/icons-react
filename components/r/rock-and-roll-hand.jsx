import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aii-eiboh.css';
import '../../css/m/mtw48rbki.css';
import '../../css/t/teubzsbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aii-eiboh"/><path class="mtw48rbki"/><path class="teubzsbfn"/></g>`,
		"fallback": "streamline-sharp:rock-and-roll-hand",
	});
}

export default Component;

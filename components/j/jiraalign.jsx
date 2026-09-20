import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sav6x4bmf.css';
import '../../css/p/px3-98b6l.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/r/rrb01n12l.css';
import '../../css/h/hvo39ebol.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGsIWlI80D" x1="8.221" x2="9.771" y1="20.546" y2="12.639" gradientTransform="translate(.556 -37.409)scale(6.46335)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="sav6x4bmf"/><stop offset=".503" class="px3-98b6l"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><linearGradient id="SVGh4n4hc6K" x1="11.391" x2="9.84" y1="10.847" y2="18.754" gradientTransform="translate(.556 -37.409)scale(6.46335)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="sav6x4bmf"/><stop offset=".503" class="px3-98b6l"/><stop offset="1" class="g_gp7lgqe"/></linearGradient></defs><path fill="url(#SVGsIWlI80D)" class="rrb01n12l"/><path fill="url(#SVGh4n4hc6K)" class="hvo39ebol"/>`,
		"fallback": "thesvg-color:jiraalign",
	});
}

export default Component;

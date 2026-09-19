import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sav6x4bmf.css';
import '../../css/p/px3-98b6l.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/u/urqo8bc8a.css';
import '../../css/s/s2il4ufgh.css';
import '../../css/g/gshmmqdsk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGm7fy3SyE" x1="8.221" x2="9.771" y1="20.546" y2="12.639" gradientTransform="translate(0 49.109)scale(.87671)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="sav6x4bmf"/><stop offset=".503" class="px3-98b6l"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><linearGradient id="SVGC4V12bVv" x1="11.391" x2="9.84" y1="10.847" y2="18.754" gradientTransform="translate(0 49.109)scale(.87671)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="sav6x4bmf"/><stop offset=".503" class="px3-98b6l"/><stop offset="1" class="g_gp7lgqe"/></linearGradient></defs><path class="urqo8bc8a"/><path fill="url(#SVGm7fy3SyE)" class="s2il4ufgh"/><path fill="url(#SVGC4V12bVv)" class="gshmmqdsk"/>`,
		"fallback": "devicon:jiraalign-wordmark",
	});
}

export default Component;

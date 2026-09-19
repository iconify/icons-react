import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt5fgtbcs.css';
import '../../css/a/a79402b8l.css';
import '../../css/m/myy8ftbvk.css';
import '../../css/d/dmjlzl0xu.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/btgf9cc3s.css';
import '../../css/d/d2r8ajbjw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGBeATEeuk" cx="0" cy="0" r="1" fx="0" fy="0" gradientTransform="scale(127.99992 127.99926)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xt5fgtbcs"/><stop offset=".58" class="a79402b8l"/><stop offset=".8" class="myy8ftbvk"/><stop offset="1" class="dmjlzl0xu"/></radialGradient></defs><g class="d2kvgvbvc"><path fill="url(#SVGBeATEeuk)" class="btgf9cc3s"/><path class="d2r8ajbjw"/></g>`,
		"fallback": "devicon:odin",
	});
}

export default Component;

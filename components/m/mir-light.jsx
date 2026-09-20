import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la915559x.css';
import '../../css/b/b7desccca.css';
import '../../css/r/rs-7vac3y.css';
import '../../css/u/umyps621i.css';
import '../../css/b/bs8asdbwg.css';

const viewBox = {"width":224,"height":80,"left":36,"top":112};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGG9quWdvO" x1="191.65" x2="250" y1="133.58" y2="133.58" gradientUnits="userSpaceOnUse"><stop offset="0" class="la915559x"/><stop offset="1" class="b7desccca"/></linearGradient></defs><path class="rs-7vac3y"/><path fill="url(#SVGG9quWdvO)" class="umyps621i"/><path class="bs8asdbwg"/>`,
		"fallback": "thesvg-color:mir-light",
	});
}

export default Component;

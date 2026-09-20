import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu0qr-zcd.css';
import '../../css/g/gv3wnabga.css';
import '../../css/f/fihwksb4e.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/g/ge8snfgdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu0qr-zcd"/><path class="gv3wnabga"/><linearGradient id="SVGrdixFcOb" x1="-20.474" x2="453.164" y1="433.739" y2="-39.899" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fihwksb4e"/><stop offset="1" class="rw5c_lizo"/></linearGradient><path fill="url(#SVGrdixFcOb)" class="ge8snfgdk"/>`,
		"fallback": "selfhst:ontime-dark",
	});
}

export default Component;

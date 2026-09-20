import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/c98y_fk5b.css';
import '../../css/s/saub33b8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGLfPwmdPV" x1="483.335" x2="741.555" y1="98.231" y2="98.231" gradientTransform="matrix(.75 0 0 -.75 -178.287 329.673)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="c98y_fk5b"/></linearGradient><path fill="url(#SVGLfPwmdPV)" class="saub33b8b"/>`,
		"fallback": "selfhst:skylite-ux-light",
	});
}

export default Component;

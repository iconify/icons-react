import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4b-kdb-c.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/ct___5r2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4b-kdb-c"/><linearGradient id="SVGZm0S3dYi" x1="-422.16" x2="-416.994" y1="638.694" y2="638.694" gradientTransform="rotate(50.29 41745.15 68565.195)scale(89.07)" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGZm0S3dYi)" class="ct___5r2c"/>`,
		"fallback": "selfhst:steam-deck-light",
	});
}

export default Component;

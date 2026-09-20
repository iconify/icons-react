import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km4qrvb6q.css';
import '../../css/g/glz7hvb0i.css';
import '../../css/h/h13z2jfxk.css';
import '../../css/v/vr0szn57s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km4qrvb6q"/><linearGradient id="SVGFbzjhd8e" x1="1690.263" x2="1690.263" y1="-35.761" y2="376.419" gradientTransform="translate(-1434.033 87.554)" gradientUnits="userSpaceOnUse"><stop offset="0" class="glz7hvb0i"/><stop offset="1" class="h13z2jfxk"/></linearGradient><path fill="url(#SVGFbzjhd8e)" class="vr0szn57s"/>`,
		"fallback": "selfhst:shaarli",
	});
}

export default Component;

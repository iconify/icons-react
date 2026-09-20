import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98y_fk5b.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wsvgiff-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGgUnW0cXV" x1="20.449" x2="398.46" y1="491.551" y2="113.54" gradientUnits="userSpaceOnUse"><stop offset="0" class="c98y_fk5b"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGgUnW0cXV)" class="wsvgiff-m"/>`,
		"fallback": "selfhst:swetrix-light",
	});
}

export default Component;

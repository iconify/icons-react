import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq6sxrv4u.css';
import '../../css/i/ig9k__4so.css';
import '../../css/d/d2lohgbhq.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGrKx2Cdxf)"><path class="iq6sxrv4u"/><path class="ig9k__4so"/></g><defs><clipPath id="SVGrKx2Cdxf"><path class="d2lohgbhq"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:link",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yv5nmtbub.css';
import '../../css/o/ou1ioiq0r.css';
import '../../css/v/vtzfhcinh.css';
import '../../css/h/hdbvy6x6y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yv5nmtbub"/><path class="ou1ioiq0r"/><path class="vtzfhcinh"/><path class="hdbvy6x6y"/></g>`,
		"fallback": "glyphs:mouse-outline",
	});
}

export default Component;

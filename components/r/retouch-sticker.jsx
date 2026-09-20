import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dya8ib-fm.css';
import '../../css/g/gu0vjlbyc.css';
import '../../css/f/fja6vyb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dya8ib-fm"/><path class="gu0vjlbyc"/><path class="fja6vyb6u"/></g>`,
		"fallback": "streamline-freehand-color:retouch-sticker",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dykohpyzd.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-fgacbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGliYWSbDy" class="dykohpyzd"/></defs><g class="cuyn6tgcc"><use href="#SVGliYWSbDy"/><use href="#SVGliYWSbDy"/><path class="o-fgacbrs"/></g>`,
		"fallback": "reicon:sms-notification-filled",
	});
}

export default Component;

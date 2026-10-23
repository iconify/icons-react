import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oofs6vwkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oofs6vwkt"/>`,
		"fallback": "vadivam:popsicle",
	});
}

export default Component;

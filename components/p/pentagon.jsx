import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe2zeeb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe2zeeb2d"/>`,
		"fallback": "vadivam:pentagon",
	});
}

export default Component;

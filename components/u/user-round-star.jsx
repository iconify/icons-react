import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd6cbnbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd6cbnbje"/>`,
		"fallback": "vadivam:user-round-star",
	});
}

export default Component;

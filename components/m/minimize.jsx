import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tboc6jd8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tboc6jd8u"/>`,
		"fallback": "noviair-light:minimize",
	});
}

export default Component;

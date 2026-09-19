import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjc8aza2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjc8aza2e"/>`,
		"fallback": "hugeicons:pyramid-structure-01",
	});
}

export default Component;

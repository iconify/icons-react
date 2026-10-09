import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z90t0b6bb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z90t0b6bb"/>`,
		"fallback": "energy-icons:navigation-off-20",
	});
}

export default Component;

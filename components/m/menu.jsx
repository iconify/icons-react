import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zssm2xbet.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zssm2xbet"/>`,
		"fallback": "rivet-icons:menu",
	});
}

export default Component;

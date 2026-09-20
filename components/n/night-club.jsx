import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0k6s5bai.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0k6s5bai"/>`,
		"fallback": "map:night-club",
	});
}

export default Component;

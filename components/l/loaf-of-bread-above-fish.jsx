import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_6e0udu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_6e0udu"/>`,
		"fallback": "pinhead:loaf-of-bread-above-fish",
	});
}

export default Component;

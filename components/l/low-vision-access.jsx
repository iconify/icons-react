import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhs7z7x8k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhs7z7x8k"/>`,
		"fallback": "map:low-vision-access",
	});
}

export default Component;

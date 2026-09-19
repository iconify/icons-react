import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgqwy0b1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgqwy0b1i"/>`,
		"fallback": "bi:pinterest",
	});
}

export default Component;

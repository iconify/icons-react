import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kekhe7bbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kekhe7bbg"/>`,
		"fallback": "bi:save",
	});
}

export default Component;

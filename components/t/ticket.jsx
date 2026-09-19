import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg558cc4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg558cc4h"/>`,
		"fallback": "icomoon-free:ticket",
	});
}

export default Component;

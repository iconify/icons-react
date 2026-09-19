import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjd3gbc5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjd3gbc5p"/>`,
		"fallback": "at-icons:previous",
	});
}

export default Component;

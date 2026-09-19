import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5yzg4h-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5yzg4h-s"/>`,
		"fallback": "famicons:logo-hackernews",
	});
}

export default Component;

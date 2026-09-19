import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baqr00whe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baqr00whe"/>`,
		"fallback": "charm:lightbulb",
	});
}

export default Component;

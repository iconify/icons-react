import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9h-btb7l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9h-btb7l"/>`,
		"fallback": "octicon:verified-16",
	});
}

export default Component;

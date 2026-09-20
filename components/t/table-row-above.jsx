import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix9-8kbzs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix9-8kbzs"/>`,
		"fallback": "jam:table-row-above",
	});
}

export default Component;

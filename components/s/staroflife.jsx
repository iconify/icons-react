import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5cfu5eeq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5cfu5eeq"/>`,
		"fallback": "f7:staroflife",
	});
}

export default Component;

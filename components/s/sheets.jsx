import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iczf7mbbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iczf7mbbn"/>`,
		"fallback": "roentgen:sheets",
	});
}

export default Component;

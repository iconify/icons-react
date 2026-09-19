import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd4fdd5ui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd4fdd5ui"/>`,
		"fallback": "fluent-emoji-high-contrast:reminder-ribbon",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esl1noc6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esl1noc6p"/>`,
		"fallback": "carbon:location-current",
	});
}

export default Component;

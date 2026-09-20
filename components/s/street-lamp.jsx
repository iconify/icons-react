import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r16398b1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r16398b1y"/>`,
		"fallback": "roentgen:street-lamp",
	});
}

export default Component;

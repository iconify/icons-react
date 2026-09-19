import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8y-0xb2a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8y-0xb2a"/>`,
		"fallback": "carbon:mpg2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flkk7eaea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flkk7eaea"/>`,
		"fallback": "icons8:japanese-yen",
	});
}

export default Component;

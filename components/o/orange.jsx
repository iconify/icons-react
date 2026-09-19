import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl140fphs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl140fphs"/>`,
		"fallback": "ep:orange",
	});
}

export default Component;

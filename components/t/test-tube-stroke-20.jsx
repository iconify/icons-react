import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6y1d0ihj.css';
import '../../css/y/ykou9hbnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6y1d0ihj"/><path class="ykou9hbnv"/>`,
		"fallback": "garden:test-tube-stroke-20",
	});
}

export default Component;

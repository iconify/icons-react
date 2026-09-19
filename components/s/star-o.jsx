import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6lwwjqxa.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6lwwjqxa"/>`,
		"fallback": "fa:star-o",
	});
}

export default Component;

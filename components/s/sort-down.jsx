import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3zoyvb4a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3zoyvb4a"/>`,
		"fallback": "ep:sort-down",
	});
}

export default Component;

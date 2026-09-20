import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh4gsqbpq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh4gsqbpq"/>`,
		"fallback": "picon:upright",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq0_rze8p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq0_rze8p"/>`,
		"fallback": "pinhead:swastika-with-dots",
	});
}

export default Component;

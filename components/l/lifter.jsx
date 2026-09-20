import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iutr1k6lz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iutr1k6lz"/>`,
		"fallback": "picon:lifter",
	});
}

export default Component;

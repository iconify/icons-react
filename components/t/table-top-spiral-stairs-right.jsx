import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1p8qwb-j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1p8qwb-j"/>`,
		"fallback": "memory:table-top-spiral-stairs-right",
	});
}

export default Component;

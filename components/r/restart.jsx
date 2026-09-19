import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2yhh17rp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2yhh17rp"/>`,
		"fallback": "carbon:restart",
	});
}

export default Component;

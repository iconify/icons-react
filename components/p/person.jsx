import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4g3ob5-z.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4g3ob5-z"/>`,
		"fallback": "vs:person",
	});
}

export default Component;

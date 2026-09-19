import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn7uv1b9z.css';
import '../../css/e/eqckd4mok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn7uv1b9z"/><path class="eqckd4mok"/>`,
		"fallback": "fxemoji:thumbsup",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln35mkb4z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln35mkb4z"/>`,
		"fallback": "fluent-mdl2:lifesaver",
	});
}

export default Component;

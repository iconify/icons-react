import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdnz6h9tz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdnz6h9tz"/>`,
		"fallback": "fluent-mdl2:linked-database",
	});
}

export default Component;

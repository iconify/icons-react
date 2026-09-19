import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0jg5m0ff.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0jg5m0ff"/>`,
		"fallback": "f7:square-favorites-alt-fill",
	});
}

export default Component;

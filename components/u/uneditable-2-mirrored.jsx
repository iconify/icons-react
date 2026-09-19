import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1tfhvw2k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1tfhvw2k"/>`,
		"fallback": "fluent-mdl2:uneditable-2-mirrored",
	});
}

export default Component;

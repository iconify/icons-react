import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a52nj-b7a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a52nj-b7a"/>`,
		"fallback": "fluent-mdl2:search-nearby",
	});
}

export default Component;

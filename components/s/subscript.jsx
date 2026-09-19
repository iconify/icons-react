import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7p0qouo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7p0qouo"/>`,
		"fallback": "fluent-mdl2:subscript",
	});
}

export default Component;

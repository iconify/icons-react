import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spz3edb9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spz3edb9s"/>`,
		"fallback": "fluent-emoji-flat:purple-circle",
	});
}

export default Component;

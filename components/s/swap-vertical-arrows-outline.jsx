import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9rze1izo.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9rze1izo"/>`,
		"fallback": "cuida:swap-vertical-arrows-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayz3-lg7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayz3-lg7c"/>`,
		"fallback": "streamline:telescope-solid",
	});
}

export default Component;

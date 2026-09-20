import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aghqy4byf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aghqy4byf"/>`,
		"fallback": "streamline:waving-hand-solid",
	});
}

export default Component;

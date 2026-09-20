import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q53v0gzju.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q53v0gzju"/>`,
		"fallback": "streamline:no-poverty-remix",
	});
}

export default Component;

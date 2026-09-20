import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3mqs9bzl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3mqs9bzl"/>`,
		"fallback": "streamline:netflix-remix",
	});
}

export default Component;

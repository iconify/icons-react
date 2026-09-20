import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0uo5wbnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e0uo5wbnl"/>`,
		"fallback": "streamline:page-setting-solid",
	});
}

export default Component;

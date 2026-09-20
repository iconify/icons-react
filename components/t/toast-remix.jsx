import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1mz-032y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b1mz-032y"/>`,
		"fallback": "streamline:toast-remix",
	});
}

export default Component;

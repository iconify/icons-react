import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6xi-86mu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6xi-86mu"/>`,
		"fallback": "streamline:layout-window-2-solid",
	});
}

export default Component;

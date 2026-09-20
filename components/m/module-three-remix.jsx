import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aprwj3u6y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aprwj3u6y"/>`,
		"fallback": "streamline:module-three-remix",
	});
}

export default Component;

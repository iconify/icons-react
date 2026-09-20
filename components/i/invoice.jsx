import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0m3lcb0w.css';
import '../../css/o/on5ils5mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0m3lcb0w"/><path class="on5ils5mm"/>`,
		"fallback": "stash:invoice",
	});
}

export default Component;

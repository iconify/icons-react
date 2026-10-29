import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7elbcuq.css';
import '../../css/n/ne0cv4kxd.css';
import '../../css/x/xd30uik4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7elbcuq wm-k"/><path class="ne0cv4kxd wm-k"/><path class="wm-a xd30uik4j"/>`,
		"fallback": "withicons-bauhaus:leaf",
	});
}

export default Component;

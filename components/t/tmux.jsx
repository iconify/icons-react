import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw7a82mon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw7a82mon"/>`,
		"fallback": "file-icons:tmux",
	});
}

export default Component;

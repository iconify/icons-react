import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5fzb4bue.css';
import '../../css/i/iennupbfk.css';
import '../../css/z/ztja4fb7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5fzb4bue"/><path class="iennupbfk"/><path class="ztja4fb7t"/>`,
		"fallback": "energy-icons:refresh-cw-48",
	});
}

export default Component;

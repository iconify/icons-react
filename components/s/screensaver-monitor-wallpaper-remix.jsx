import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg2y4rbgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg2y4rbgx"/>`,
		"fallback": "streamline:screensaver-monitor-wallpaper-remix",
	});
}

export default Component;

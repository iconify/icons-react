import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzmt377rd.css';
import '../../css/o/oreh4pgns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzmt377rd"/><path class="oreh4pgns"/>`,
		"fallback": "garden:terminal-window-fill-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fcb3g_r.css';
import '../../css/l/l37lfua-l.css';
import '../../css/c/c64c-7baa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3fcb3g_r"/><path class="l37lfua-l"/><path class="c64c-7baa"/>`,
		"fallback": "energy-icons:scissors-48-bold",
	});
}

export default Component;

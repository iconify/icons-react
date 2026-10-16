import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl32e1bkb.css';
import '../../css/z/zafm50xfx.css';
import '../../css/b/bn2n7mbcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl32e1bkb"/><path class="zafm50xfx"/><path class="bn2n7mbcf"/>`,
		"fallback": "energy-icons:rake-48-bold",
	});
}

export default Component;

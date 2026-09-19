import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvcq89ble.css';
import '../../css/o/oa964uw4k.css';
import '../../css/q/q8ppmua1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvcq89ble"><path class="oa964uw4k"/><path class="q8ppmua1p"/></g>`,
		"fallback": "catppuccin:tauri-ignore",
	});
}

export default Component;

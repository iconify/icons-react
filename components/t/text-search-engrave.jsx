import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i_gbtq9gj.css';
import '../../css/v/vm_vkq69s.css';
import '../../css/l/l0orl0b7t.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/w/wtwdiqbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i_gbtq9gj wm-k"/><path class="vm_vkq69s wm-a"/><path class="l0orl0b7t wm-shadow"/><path class="gz4rmvf3e wm-k"/><path class="wm-a wtwdiqbwi"/></g>`,
		"fallback": "withicons:text-search-engrave",
	});
}

export default Component;

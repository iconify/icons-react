import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/ggdm2b8ta.css';
import '../../css/h/h567jqbwk.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/z/zpu53zwhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ggdm2b8ta wm-k"/><path class="h567jqbwk wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="wm-a zpu53zwhs"/></g>`,
		"fallback": "withicons:scan-face-engrave",
	});
}

export default Component;

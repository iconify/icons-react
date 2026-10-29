import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vkgfvu33e.css';
import '../../css/s/sm3wc3-js.css';
import '../../css/s/sych0xh2d.css';
import '../../css/a/aap5atbkv.css';
import '../../css/s/s8-jh0bvg.css';
import '../../css/r/r4k-9nyuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vkgfvu33e wm-k"/><path class="sm3wc3-js wm-a"/><path class="sych0xh2d wm-shadow"/><path class="aap5atbkv wm-k"/><path class="s8-jh0bvg wm-a"/><path class="r4k-9nyuf wm-a"/></g>`,
		"fallback": "withicons:mails-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wd7ku9bht.css';
import '../../css/p/p111p0b4n.css';
import '../../css/u/u5lsx9bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wd7ku9bht wm-a"/><path class="p111p0b4n wm-k"/><path class="u5lsx9bzl wm-a"/></g>`,
		"fallback": "withicons:text-cursor-sketch",
	});
}

export default Component;

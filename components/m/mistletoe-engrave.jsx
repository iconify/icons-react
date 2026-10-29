import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ddik5xb2c.css';
import '../../css/t/tpqzq8bhb.css';
import '../../css/c/c0u3-bbch.css';
import '../../css/e/e0n14xb8w.css';
import '../../css/p/prthrmbng.css';
import '../../css/y/ym55n8biq.css';
import '../../css/v/v826tbcka.css';
import '../../css/v/v7oxsddra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ddik5xb2c wm-k"/><path class="tpqzq8bhb wm-a"/><path class="c0u3-bbch wm-s"/><path class="e0n14xb8w wm-shadow"/><path class="prthrmbng wm-k"/><path class="wm-a ym55n8biq"/><path class="v826tbcka wm-s"/><path class="v7oxsddra wm-s"/></g>`,
		"fallback": "withicons:mistletoe-engrave",
	});
}

export default Component;

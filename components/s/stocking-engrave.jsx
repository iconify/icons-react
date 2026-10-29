import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xz_a0r57n.css';
import '../../css/a/adscdonuu.css';
import '../../css/s/s6sw282lt.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/e/erfnpl34n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xz_a0r57n"/><path class="adscdonuu wm-a"/><path class="s6sw282lt wm-shadow"/><path class="o25cc4zjh wm-k"/><path class="erfnpl34n wm-a"/></g>`,
		"fallback": "withicons:stocking-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ogjt-gv0f.css';
import '../../css/l/lp25a--1m.css';
import '../../css/j/juatbqf8d.css';
import '../../css/l/l2uwf7bam.css';
import '../../css/j/jnx6lfl8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ogjt-gv0f wm-k"/><path class="lp25a--1m wm-a"/><path class="juatbqf8d wm-shadow"/><path class="l2uwf7bam wm-k"/><path class="jnx6lfl8y wm-a"/></g>`,
		"fallback": "withicons:radio-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aebs81nbm.css';
import '../../css/r/r7-o9zbma.css';
import '../../css/x/xt0zhz0yf.css';
import '../../css/a/a02a9jbmr.css';
import '../../css/o/oybl7bcif.css';
import '../../css/w/wm2uq-jsu.css';
import '../../css/s/sxeicbc4d.css';
import '../../css/x/xoc4f8_dk.css';
import '../../css/w/w1ecumbae.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aebs81nbm"/><path class="r7-o9zbma"/><path class="xt0zhz0yf"/><path class="a02a9jbmr"/><path clip-rule="evenodd" class="oybl7bcif"/><path clip-rule="evenodd" class="wm2uq-jsu"/><path clip-rule="evenodd" class="sxeicbc4d"/><path class="xoc4f8_dk"/><path class="w1ecumbae"/></g>`,
		"fallback": "fluent-emoji-flat:joker",
	});
}

export default Component;

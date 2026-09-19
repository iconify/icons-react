import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqnihhblm.css';
import '../../css/x/xn7199bdf.css';
import '../../css/w/whhjun3cu.css';
import '../../css/n/nz2tvdblu.css';
import '../../css/h/hfmoz1dvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqnihhblm"/><path class="xn7199bdf"/><path class="whhjun3cu"/><path class="nz2tvdblu"/><path class="hfmoz1dvu"/></g>`,
		"fallback": "fluent-emoji-flat:video-camera",
	});
}

export default Component;

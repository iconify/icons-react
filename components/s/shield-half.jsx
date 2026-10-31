import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yricu9bwx.css';
import '../../css/b/bd9yc0_lt.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/f/fr7k7ybsp.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yricu9bwx"/><path class="bd9yc0_lt wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="fr7k7ybsp wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shield-half",
	});
}

export default Component;

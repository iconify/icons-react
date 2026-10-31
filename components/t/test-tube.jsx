import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dsbz12bru.css';
import '../../css/p/pg-j1evyr.css';
import '../../css/c/cfmykrbut.css';
import '../../css/f/fjsedw-yo.css';
import '../../css/t/tntr6ebzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dsbz12bru"/><path class="pg-j1evyr wm-shine"/><path class="cfmykrbut wm-k"/><path class="fjsedw-yo wm-a"/><path class="tntr6ebzv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:test-tube",
	});
}

export default Component;

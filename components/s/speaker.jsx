import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i4zeojk8d.css';
import '../../css/c/cbgb6hb6t.css';
import '../../css/j/jh5_0cbif.css';
import '../../css/e/ehz_gxbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i4zeojk8d"/><path class="cbgb6hb6t wm-shine"/><path class="jh5_0cbif wm-k"/><path class="ehz_gxbyn wm-a"/></g>`,
		"fallback": "withicons-kawaii:speaker",
	});
}

export default Component;

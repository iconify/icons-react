import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v0dlvtb_a.css';
import '../../css/u/ur0zhsron.css';
import '../../css/x/xz6j7obpt.css';
import '../../css/m/miaw0lbio.css';
import '../../css/s/s1vtn9bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v0dlvtb_a"/><path class="ur0zhsron wm-shine"/><path class="wm-k xz6j7obpt"/><path class="miaw0lbio wm-a"/><path class="s1vtn9bnk wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pizza",
	});
}

export default Component;

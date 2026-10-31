import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yw66-e3oc.css';
import '../../css/p/p1htjs99m.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/e/epabx8bdv.css';
import '../../css/e/e4ehvrk0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yw66-e3oc"/><path class="p1htjs99m wm-shine"/><path class="l9lv5_bcf wm-k"/><path class="epabx8bdv wm-a"/><path class="e4ehvrk0f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scan-search",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ir0it-bct.css';
import '../../css/m/mx0ir27no.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/u/ulmi8xb7c.css';
import '../../css/e/e4ehvrk0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ir0it-bct"/><path class="mx0ir27no"/><path class="l9lv5_bcf wm-k"/><path class="ulmi8xb7c wm-a"/><path class="e4ehvrk0f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scan-eye",
	});
}

export default Component;

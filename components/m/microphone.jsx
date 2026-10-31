import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kllol_ygu.css';
import '../../css/r/rpix6u-1b.css';
import '../../css/u/ulri3ijbi.css';
import '../../css/m/mozr6bcby.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kllol_ygu"/><path class="rpix6u-1b wm-shine"/><path class="ulri3ijbi wm-k"/><path class="mozr6bcby wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:microphone",
	});
}

export default Component;

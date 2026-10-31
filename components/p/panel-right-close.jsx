import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i-exlc8nu.css';
import '../../css/y/y0gos9ywm.css';
import '../../css/v/vwzncsbmf.css';
import '../../css/i/ijov0lj0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i-exlc8nu"/><path class="wm-shine y0gos9ywm"/><path class="vwzncsbmf wm-k"/><path class="ijov0lj0i wm-a"/></g>`,
		"fallback": "withicons-kawaii:panel-right-close",
	});
}

export default Component;

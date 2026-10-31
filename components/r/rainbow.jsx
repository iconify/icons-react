import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zo_eigxfe.css';
import '../../css/b/b5tlcvb9q.css';
import '../../css/v/vpnw68haq.css';
import '../../css/w/wk7jmzmpf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zo_eigxfe"/><path class="b5tlcvb9q"/><path class="vpnw68haq wm-k"/><path class="wk7jmzmpf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:rainbow",
	});
}

export default Component;

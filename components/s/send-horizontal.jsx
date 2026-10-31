import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tcrosogae.css';
import '../../css/j/jltv4rbyw.css';
import '../../css/s/skbbvrbhv.css';
import '../../css/h/h0rhmfbpn.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tcrosogae"/><path class="jltv4rbyw wm-shine"/><path class="skbbvrbhv wm-k"/><path class="h0rhmfbpn wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:send-horizontal",
	});
}

export default Component;

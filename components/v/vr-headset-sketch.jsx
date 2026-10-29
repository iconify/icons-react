import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q-hyczb2j.css';
import '../../css/q/qballtb5n.css';
import '../../css/v/vjzfk8ovh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q-hyczb2j"/><path class="qballtb5n wm-k"/><path class="vjzfk8ovh wm-a"/></g>`,
		"fallback": "withicons:vr-headset-sketch",
	});
}

export default Component;

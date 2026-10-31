import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g_rdvqvju.css';
import '../../css/t/twoynubjx.css';
import '../../css/h/h0su9ok4d.css';
import '../../css/h/h8wb40b9m.css';
import '../../css/f/ffkddcbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g_rdvqvju"/><path class="twoynubjx wm-shine"/><path class="h0su9ok4d wm-k"/><path class="h8wb40b9m wm-a"/><path class="ffkddcbxp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sandwich",
	});
}

export default Component;

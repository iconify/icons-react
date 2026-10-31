import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfnvbxnjn.css';
import '../../css/j/jyq2jnbdg.css';
import '../../css/b/b8thk5bmg.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mfnvbxnjn"/><path class="jyq2jnbdg wm-shine"/><path class="b8thk5bmg wm-k"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons-kawaii:settings",
	});
}

export default Component;

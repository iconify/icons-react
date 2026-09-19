import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpof57bix.css';
import '../../css/z/z5o5m7b-a.css';
import '../../css/o/o2j0bab4m.css';
import '../../css/l/lu8aa6bfb.css';
import '../../css/i/it4u1udcj.css';
import '../../css/v/vjq-9x8aa.css';
import '../../css/v/vf3a5l6qc.css';
import '../../css/l/lmx1szb2k.css';
import '../../css/g/gs-t0-q7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpof57bix"/><path class="z5o5m7b-a"/><path class="o2j0bab4m"/><path class="lu8aa6bfb"/><path class="it4u1udcj"/><path class="vjq-9x8aa"/><path class="vf3a5l6qc"/><path class="lmx1szb2k"/><path class="gs-t0-q7f"/></g>`,
		"fallback": "fluent-emoji-flat:open-mailbox-with-raised-flag",
	});
}

export default Component;

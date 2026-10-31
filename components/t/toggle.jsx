import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gp0ml1bey.css';
import '../../css/g/gx_q9cc-s.css';
import '../../css/d/dc5wpccoq.css';
import '../../css/p/pjqa07bbp.css';
import '../../css/s/skqzgzjwd.css';
import '../../css/f/fx1365b_v.css';
import '../../css/n/nzraylb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="gp0ml1bey"/><path class="gx_q9cc-s"/><path class="dc5wpccoq wm-shine"/><path class="pjqa07bbp wm-k"/><path class="skqzgzjwd wm-a"/><path class="fx1365b_v"/><path class="nzraylb3n"/></g>`,
		"fallback": "withicons-kawaii:toggle",
	});
}

export default Component;

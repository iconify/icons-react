import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw8ccub0a.css';
import '../../css/j/jzhpb3bqb.css';
import '../../css/q/q5ty2f3-s.css';
import '../../css/a/ar6oaobqo.css';
import '../../css/e/e_o28f1-b.css';
import '../../css/s/st1arvbax.css';
import '../../css/d/dgtms6b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mw8ccub0a"/><path class="jzhpb3bqb"/><path class="q5ty2f3-s"/><path class="ar6oaobqo"/><path class="e_o28f1-b"/><circle class="st1arvbax"/><path class="dgtms6b-f"/></g>`,
		"fallback": "solar:music-notes-broken",
	});
}

export default Component;

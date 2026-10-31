import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u0qa14b2r.css';
import '../../css/l/l15eg4b1k.css';
import '../../css/k/kfczp1v0y.css';
import '../../css/t/twlqflbgi.css';
import '../../css/p/pa-aaynvi.css';
import '../../css/n/npjeylbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u0qa14b2r"/><path class="l15eg4b1k wm-shine"/><path class="kfczp1v0y wm-k"/><path class="twlqflbgi wm-a"/><path class="pa-aaynvi wm-s"/><path class="npjeylbea wm-deco"/></g>`,
		"fallback": "withicons-kawaii:satellite",
	});
}

export default Component;

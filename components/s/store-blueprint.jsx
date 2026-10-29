import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fhl1wub4v.css';
import '../../css/m/mznwbyd6w.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/r/r646fibse.css';
import '../../css/n/nfcb_rb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fhl1wub4v wm-deco"/><path class="mznwbyd6w wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="r646fibse wm-k"/><path class="nfcb_rb2q wm-a"/></g>`,
		"fallback": "withicons:store-blueprint",
	});
}

export default Component;

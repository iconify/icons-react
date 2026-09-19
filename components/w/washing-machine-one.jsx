import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci05-hekc.css';
import '../../css/e/e932blbvr.css';
import '../../css/i/iklpwmb7f.css';
import '../../css/q/qk6k945-k.css';
import '../../css/w/wgd2gjbcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ci05-hekc"/><path class="e932blbvr"/><circle class="iklpwmb7f"/><circle class="qk6k945-k"/><circle class="wgd2gjbcv"/></g>`,
		"fallback": "icon-park-outline:washing-machine-one",
	});
}

export default Component;

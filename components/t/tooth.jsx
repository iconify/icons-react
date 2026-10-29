import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aod28ib-w.css';
import '../../css/x/xhteacbgi.css';
import '../../css/h/hbao7o4ph.css';
import '../../css/k/k0slk4bie.css';
import '../../css/f/fu77ienni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aod28ib-w wm-k"/><path class="wm-k xhteacbgi"/><path class="hbao7o4ph wm-k"/><path class="k0slk4bie wm-shine"/><path class="fu77ienni wm-deco"/></g>`,
		"fallback": "withicons-anime:tooth",
	});
}

export default Component;

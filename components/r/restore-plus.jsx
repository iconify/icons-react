import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcvk57adi.css';
import '../../css/q/q_c3efsrs.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/d/dkli7ybia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xcvk57adi"/><path class="q_c3efsrs"/><circle class="uilqb5bzk"/><path class="dkli7ybia"/></g>`,
		"fallback": "andrsrxn:restore-plus",
	});
}

export default Component;

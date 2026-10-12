import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayx4uqb6m.css';
import '../../css/e/e1yqppb8t.css';
import '../../css/a/awqw_5bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ayx4uqb6m"/><path class="e1yqppb8t"/><path class="awqw_5bld"/></g>`,
		"fallback": "andrsrxn:warehouse",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovh5qsial.css';
import '../../css/a/admunbb4j.css';
import '../../css/q/q3x6tf25t.css';
import '../../css/x/x2cs-huwk.css';
import '../../css/v/v652e5bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ovh5qsial"/><circle class="admunbb4j"/><path class="q3x6tf25t"/><circle class="x2cs-huwk"/><circle class="v652e5bef"/></g>`,
		"fallback": "andrsrxn:percent",
	});
}

export default Component;

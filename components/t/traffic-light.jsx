import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7xxw5bmd.css';
import '../../css/x/xgd_k2b1k.css';
import '../../css/z/zs6f18b2u.css';
import '../../css/a/a8w51acwb.css';
import '../../css/o/omqnqwbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7xxw5bmd"/><path class="xgd_k2b1k"/><circle class="zs6f18b2u"/><circle class="a8w51acwb"/><path class="omqnqwbot"/></g>`,
		"fallback": "andrsrxn:traffic-light",
	});
}

export default Component;

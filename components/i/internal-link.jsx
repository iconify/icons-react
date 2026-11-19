import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfsj29bvf.css';
import '../../css/n/nmlfxjlte.css';
import '../../css/t/tdz1vobnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfsj29bvf"/><path class="nmlfxjlte"/><path class="tdz1vobnx"/></g>`,
		"fallback": "andrsrxn:internal-link",
	});
}

export default Component;

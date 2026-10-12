import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvx0l2qmh.css';
import '../../css/l/ld-j2zbhv.css';
import '../../css/w/wmvgymmly.css';
import '../../css/b/boyv3ih1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nvx0l2qmh"/><path class="ld-j2zbhv"/><path class="wmvgymmly"/><path class="boyv3ih1f"/></g>`,
		"fallback": "andrsrxn:thermometer-sun",
	});
}

export default Component;

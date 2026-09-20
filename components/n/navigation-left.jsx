import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7zgftbpr.css';
import '../../css/m/mp1224b4f.css';
import '../../css/o/o41gdbbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7zgftbpr"/><path class="mp1224b4f"/><path class="o41gdbbxm"/></g>`,
		"fallback": "streamline-ultimate-color:navigation-left",
	});
}

export default Component;

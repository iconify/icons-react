import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu2lj751d.css';
import '../../css/l/lpkfrvb2f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu2lj751d"/><path class="lpkfrvb2f"/></g>`,
		"fallback": "streamline-color:paragraph",
	});
}

export default Component;

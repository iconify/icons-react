import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpe_web5y.css';
import '../../css/b/bu49r553h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xpe_web5y"/><path class="bu49r553h"/></g>`,
		"fallback": "streamline-color:layout-window-11",
	});
}

export default Component;

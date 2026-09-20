import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uidqnq8xn.css';
import '../../css/e/ee30u9b4t.css';
import '../../css/w/wwcljmy-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uidqnq8xn"/><path class="ee30u9b4t"/><path class="wwcljmy-s"/></g>`,
		"fallback": "streamline-color:user-profile-focus",
	});
}

export default Component;

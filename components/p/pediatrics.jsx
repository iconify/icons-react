import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vukvxzvmz.css';
import '../../css/f/fyt8axbtm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vukvxzvmz"/><path class="fyt8axbtm"/>`,
		"fallback": "medical-icon:pediatrics",
	});
}

export default Component;

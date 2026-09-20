import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry477xb-q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry477xb-q"/>`,
		"fallback": "medical-icon:outpatient",
	});
}

export default Component;

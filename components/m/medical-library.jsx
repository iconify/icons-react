import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy5by7b9g.css';
import '../../css/g/gld9kyb4d.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy5by7b9g"/><path class="gld9kyb4d"/>`,
		"fallback": "medical-icon:medical-library",
	});
}

export default Component;

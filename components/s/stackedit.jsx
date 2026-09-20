import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oth5bdc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oth5bdc8m"/>`,
		"fallback": "simple-icons:stackedit",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkut9chyn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkut9chyn"/>`,
		"fallback": "fa6-solid:school-flag",
	});
}

export default Component;

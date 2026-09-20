import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvfgu0lvm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvfgu0lvm"/>`,
		"fallback": "pinhead:station-wagon",
	});
}

export default Component;

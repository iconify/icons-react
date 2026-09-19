import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys838abcy.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys838abcy"/>`,
		"fallback": "academicons:openedition",
	});
}

export default Component;

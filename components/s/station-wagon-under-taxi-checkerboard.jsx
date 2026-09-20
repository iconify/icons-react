import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo9na3cxo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo9na3cxo"/>`,
		"fallback": "pinhead:station-wagon-under-taxi-checkerboard",
	});
}

export default Component;

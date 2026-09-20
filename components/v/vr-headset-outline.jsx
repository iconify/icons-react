import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv61dmbjf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv61dmbjf"/>`,
		"fallback": "teenyicons:vr-headset-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf-y_r2sd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf-y_r2sd"/>`,
		"fallback": "teenyicons:send-down-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4sx92bkq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4sx92bkq"/>`,
		"fallback": "thesvg-color:oracle-icon",
	});
}

export default Component;

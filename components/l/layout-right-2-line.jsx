import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf_ch9b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf_ch9b5g"/>`,
		"fallback": "ri:layout-right-2-line",
	});
}

export default Component;

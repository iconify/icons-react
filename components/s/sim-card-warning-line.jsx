import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab0zmzbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab0zmzbri"/>`,
		"fallback": "ri:sim-card-warning-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcp2bq36g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcp2bq36g"/>`,
		"fallback": "ri:pinterest-line",
	});
}

export default Component;

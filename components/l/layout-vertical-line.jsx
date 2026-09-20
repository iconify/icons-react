import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fapd8595a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fapd8595a"/>`,
		"fallback": "ri:layout-vertical-line",
	});
}

export default Component;

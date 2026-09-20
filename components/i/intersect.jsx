import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttdmw1b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttdmw1b3a"/>`,
		"fallback": "mynaui:intersect",
	});
}

export default Component;

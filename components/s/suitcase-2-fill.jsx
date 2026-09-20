import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdo0w_bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdo0w_bjp"/>`,
		"fallback": "mingcute:suitcase-2-fill",
	});
}

export default Component;

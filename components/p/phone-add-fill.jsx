import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdhh8zmon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdhh8zmon"/>`,
		"fallback": "mingcute:phone-add-fill",
	});
}

export default Component;

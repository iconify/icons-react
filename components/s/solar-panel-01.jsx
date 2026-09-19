import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va9eu4b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va9eu4b5i"/>`,
		"fallback": "hugeicons:solar-panel-01",
	});
}

export default Component;

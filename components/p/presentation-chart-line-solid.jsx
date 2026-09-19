import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3x8cdl_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3x8cdl_s"/>`,
		"fallback": "heroicons:presentation-chart-line-solid",
	});
}

export default Component;

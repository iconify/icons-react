import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugx8g_87f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugx8g_87f"/>`,
		"fallback": "noviair:square-1",
	});
}

export default Component;

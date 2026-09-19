import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3x9-strl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3x9-strl"/>`,
		"fallback": "hugeicons:pointing-left-05",
	});
}

export default Component;

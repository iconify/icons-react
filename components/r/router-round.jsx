import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orig1-xyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orig1-xyy"/>`,
		"fallback": "coolicons:router-round",
	});
}

export default Component;

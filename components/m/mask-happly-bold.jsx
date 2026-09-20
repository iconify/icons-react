import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th2-4rb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th2-4rb1g"/>`,
		"fallback": "solar:mask-happly-bold",
	});
}

export default Component;

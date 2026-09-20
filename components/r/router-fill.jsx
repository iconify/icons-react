import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cau7m0b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cau7m0b9q"/>`,
		"fallback": "ri:router-fill",
	});
}

export default Component;

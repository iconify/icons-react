import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcw81gbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcw81gbbm"/>`,
		"fallback": "pixel:plane-solid",
	});
}

export default Component;

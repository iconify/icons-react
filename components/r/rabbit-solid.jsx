import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt8f7bcaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt8f7bcaz"/>`,
		"fallback": "withicons:rabbit-solid",
	});
}

export default Component;

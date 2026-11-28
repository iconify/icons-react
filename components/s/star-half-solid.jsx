import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo98k8b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo98k8b4c"/>`,
		"fallback": "iconaut:star-half-solid",
	});
}

export default Component;

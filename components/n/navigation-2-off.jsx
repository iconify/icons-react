import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amxlq7b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amxlq7b9r"/>`,
		"fallback": "vadivam:navigation-2-off",
	});
}

export default Component;

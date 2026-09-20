import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/galeiq85c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="galeiq85c"/>`,
		"fallback": "simple-icons:quarto",
	});
}

export default Component;

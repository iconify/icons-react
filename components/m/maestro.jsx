import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0iym6bem.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0iym6bem"/>`,
		"fallback": "wpf:maestro",
	});
}

export default Component;

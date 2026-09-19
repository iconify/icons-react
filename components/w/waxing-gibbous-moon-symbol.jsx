import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amcaz4b5k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amcaz4b5k"/>`,
		"fallback": "dinkie-icons:waxing-gibbous-moon-symbol",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phayqmk6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phayqmk6y"/>`,
		"fallback": "griddy-icons:shield",
	});
}

export default Component;

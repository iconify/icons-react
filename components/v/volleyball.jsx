import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egv3yy4my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egv3yy4my"/>`,
		"fallback": "noviair-light:volleyball",
	});
}

export default Component;

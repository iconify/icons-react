import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy1nb0bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy1nb0bde"/>`,
		"fallback": "eva:phone-outline",
	});
}

export default Component;

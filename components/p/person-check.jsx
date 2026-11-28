import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj47757af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj47757af"/>`,
		"fallback": "noviair-light:person-check",
	});
}

export default Component;

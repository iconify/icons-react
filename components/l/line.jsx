import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i65jm5bsz.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i65jm5bsz"/>`,
		"fallback": "jam:line",
	});
}

export default Component;

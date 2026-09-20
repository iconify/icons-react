import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgcju0jts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgcju0jts"/>`,
		"fallback": "uil:sorting",
	});
}

export default Component;

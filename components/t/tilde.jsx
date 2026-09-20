import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf4ba4bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf4ba4bjz"/>`,
		"fallback": "tabler:tilde",
	});
}

export default Component;

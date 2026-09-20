import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gko5mnbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gko5mnbzh"/>`,
		"fallback": "streamline-ultimate:paragraph-center-align-bold",
	});
}

export default Component;

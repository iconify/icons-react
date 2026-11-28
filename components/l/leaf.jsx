import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aluynxc1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aluynxc1a"/>`,
		"fallback": "noviair-light:leaf",
	});
}

export default Component;

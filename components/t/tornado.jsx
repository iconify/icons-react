import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogw6r5b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogw6r5b4p"/>`,
		"fallback": "griddy-icons:tornado",
	});
}

export default Component;

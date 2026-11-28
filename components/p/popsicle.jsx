import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u71qk7k1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u71qk7k1p"/>`,
		"fallback": "noviair:popsicle",
	});
}

export default Component;

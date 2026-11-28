import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lor5nc46g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lor5nc46g"/>`,
		"fallback": "noviair-light:library-search",
	});
}

export default Component;

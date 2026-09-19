import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poltb9j9g.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poltb9j9g"/>`,
		"fallback": "topcoat:location",
	});
}

export default Component;

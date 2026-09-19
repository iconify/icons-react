import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g22krckib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g22krckib"/>`,
		"fallback": "ci:search-small-minus",
	});
}

export default Component;

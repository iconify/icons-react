import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lord4lpuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lord4lpuf"/>`,
		"fallback": "ci:search-magnifying-glass",
	});
}

export default Component;

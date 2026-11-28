import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u450ety8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u450ety8c"/>`,
		"fallback": "noviair:navigation",
	});
}

export default Component;

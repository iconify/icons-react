import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xthn5fbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xthn5fbsy"/>`,
		"fallback": "tabler:vector-beizer",
	});
}

export default Component;

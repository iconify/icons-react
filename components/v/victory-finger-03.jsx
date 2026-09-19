import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljx7t8mtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljx7t8mtz"/>`,
		"fallback": "hugeicons:victory-finger-03",
	});
}

export default Component;

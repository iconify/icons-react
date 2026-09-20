import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsuvpibfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsuvpibfy"/>`,
		"fallback": "ix:sort-ascending",
	});
}

export default Component;

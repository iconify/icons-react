import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg_c-ubvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg_c-ubvg"/>`,
		"fallback": "ix:tasks-done",
	});
}

export default Component;

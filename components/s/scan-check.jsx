import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j09e24okr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j09e24okr"/>`,
		"fallback": "noviair:scan-check",
	});
}

export default Component;

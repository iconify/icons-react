import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdck0tbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdck0tbcr"/>`,
		"fallback": "thesvg:labview",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v22eic7fh.css';
import '../../css/h/h3kz7abjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="v22eic7fh"/><path class="h3kz7abjt"/></g>`,
		"fallback": "cryptocurrency-color:nuls",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6qtw7bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6qtw7bof"/>`,
		"fallback": "noviair-light:navigation-check",
	});
}

export default Component;

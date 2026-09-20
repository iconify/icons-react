import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt9rhsw8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt9rhsw8k"/>`,
		"fallback": "material-icon-theme:less",
	});
}

export default Component;

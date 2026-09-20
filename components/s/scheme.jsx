import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bocc0t2az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bocc0t2az"/>`,
		"fallback": "material-icon-theme:scheme",
	});
}

export default Component;

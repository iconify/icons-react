import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm_oytb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm_oytb8m"/>`,
		"fallback": "thesvg-color:jetpack-compose",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve_zacdrl.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve_zacdrl"/>`,
		"fallback": "maki:triangle-11",
	});
}

export default Component;

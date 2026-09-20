import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bay3adb2b.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bay3adb2b"/>`,
		"fallback": "maki:landmark-11",
	});
}

export default Component;

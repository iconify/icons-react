import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge1z230cx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge1z230cx"/>`,
		"fallback": "famicons:lock-closed-sharp",
	});
}

export default Component;

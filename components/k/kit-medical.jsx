import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjul6nzne.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjul6nzne"/>`,
		"fallback": "fa7-solid:kit-medical",
	});
}

export default Component;

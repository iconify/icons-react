import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiy-7cckx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiy-7cckx"/>`,
		"fallback": "fa7-brands:rebel",
	});
}

export default Component;

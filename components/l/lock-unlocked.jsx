import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s67jb_bil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s67jb_bil"/>`,
		"fallback": "cil:lock-unlocked",
	});
}

export default Component;

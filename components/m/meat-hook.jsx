import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsrr6zzpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsrr6zzpt"/>`,
		"fallback": "game-icons:meat-hook",
	});
}

export default Component;

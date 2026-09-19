import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-px0kjof.css';
import '../../css/p/p0hdxnbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-px0kjof"/><path class="p0hdxnbox"/>`,
		"fallback": "boxicons:power-filled",
	});
}

export default Component;

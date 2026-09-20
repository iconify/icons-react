import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umr1td1ao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umr1td1ao"/>`,
		"fallback": "streamline-plump:user-face-male-solid",
	});
}

export default Component;

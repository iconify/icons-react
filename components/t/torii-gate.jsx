import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pda79djdn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pda79djdn"/>`,
		"fallback": "fa-solid:torii-gate",
	});
}

export default Component;

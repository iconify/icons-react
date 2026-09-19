import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr6ahtbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr6ahtbsh"/>`,
		"fallback": "boxicons:moon-phase-3",
	});
}

export default Component;

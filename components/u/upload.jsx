import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwa2__bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwa2__bso"/>`,
		"fallback": "uil:upload",
	});
}

export default Component;

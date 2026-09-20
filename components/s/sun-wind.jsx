import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eub4bub4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eub4bub4d"/>`,
		"fallback": "tabler:sun-wind",
	});
}

export default Component;

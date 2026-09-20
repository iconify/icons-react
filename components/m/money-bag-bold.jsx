import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3he05zka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3he05zka"/>`,
		"fallback": "solar:money-bag-bold",
	});
}

export default Component;

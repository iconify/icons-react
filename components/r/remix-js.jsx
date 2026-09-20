import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga6k13bfd.css';
import '../../css/e/e7xhl5x5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga6k13bfd"/><path class="e7xhl5x5x"/>`,
		"fallback": "lineicons:remix-js",
	});
}

export default Component;

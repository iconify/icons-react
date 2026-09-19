import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no8etixlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no8etixlw"/>`,
		"fallback": "fe:warning",
	});
}

export default Component;

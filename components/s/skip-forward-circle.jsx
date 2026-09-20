import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdby9qbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdby9qbpj"/>`,
		"fallback": "uil:skip-forward-circle",
	});
}

export default Component;

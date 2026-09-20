import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bzg8psr9v.css';
import '../../css/d/d1w_xw5zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bzg8psr9v"/><path class="d1w_xw5zb"/></g>`,
		"fallback": "streamline-freehand:light-mode-brightness-half",
	});
}

export default Component;

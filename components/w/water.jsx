import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i81xwnbpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i81xwnbpj"/>`,
		"fallback": "icon-park-solid:water",
	});
}

export default Component;

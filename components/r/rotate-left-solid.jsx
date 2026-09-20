import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hln_rnjqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hln_rnjqp"/>`,
		"fallback": "streamline-plump:rotate-left-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_a7tmmsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_a7tmmsq"/>`,
		"fallback": "streamline-plump:toast-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2yj3q84r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2yj3q84r"/>`,
		"fallback": "streamline-plump:traffic-light-solid",
	});
}

export default Component;

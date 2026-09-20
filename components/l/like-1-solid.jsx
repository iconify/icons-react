import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upt28hb-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="upt28hb-n"/>`,
		"fallback": "streamline-plump:like-1-solid",
	});
}

export default Component;

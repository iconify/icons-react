import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk3qjcb8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk3qjcb8i"/>`,
		"fallback": "streamline-plump:mall-solid",
	});
}

export default Component;

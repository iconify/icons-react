import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqjx7xywg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqjx7xywg"/>`,
		"fallback": "streamline-plump:lost-and-found-solid",
	});
}

export default Component;

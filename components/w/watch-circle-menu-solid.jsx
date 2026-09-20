import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqpvz2bwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqpvz2bwi"/>`,
		"fallback": "streamline-plump:watch-circle-menu-solid",
	});
}

export default Component;

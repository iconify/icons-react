import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5hvoban.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-5hvoban"/>`,
		"fallback": "streamline-plump:production-belt-remix",
	});
}

export default Component;

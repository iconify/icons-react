import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjr1hxbnl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjr1hxbnl"/>`,
		"fallback": "streamline-plump:landing",
	});
}

export default Component;

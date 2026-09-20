import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk5-r5guu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sk5-r5guu"/>`,
		"fallback": "streamline-plump:projector-screen-remix",
	});
}

export default Component;

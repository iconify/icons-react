import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j37p8-b4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j37p8-b4w"/>`,
		"fallback": "streamline-plump:moustache-remix",
	});
}

export default Component;

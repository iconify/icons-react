import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q56z8ybmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q56z8ybmi"/>`,
		"fallback": "streamline-plump:tune-adjust-volume-remix",
	});
}

export default Component;

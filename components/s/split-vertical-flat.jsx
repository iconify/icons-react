import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmdvb9gaj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmdvb9gaj"/>`,
		"fallback": "streamline-color:split-vertical-flat",
	});
}

export default Component;

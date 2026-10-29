import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc5hd6b6e.css';
import '../../css/i/iepl1qnjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc5hd6b6e"/><path class="iepl1qnjh"/>`,
		"fallback": "withicons-bauhaus:messages",
	});
}

export default Component;

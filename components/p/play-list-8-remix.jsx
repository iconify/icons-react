import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7460o43c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7460o43c"/>`,
		"fallback": "streamline:play-list-8-remix",
	});
}

export default Component;

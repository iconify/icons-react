import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o900hie1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o900hie1y"/>`,
		"fallback": "streamline:line-arrow-up-1-remix",
	});
}

export default Component;

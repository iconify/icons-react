import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfatfab1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfatfab1m"/>`,
		"fallback": "streamline:polka-dot-circle-remix",
	});
}

export default Component;

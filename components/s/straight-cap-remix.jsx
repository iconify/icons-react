import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb28gsi8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xb28gsi8u"/>`,
		"fallback": "streamline:straight-cap-remix",
	});
}

export default Component;

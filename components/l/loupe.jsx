import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7grmv2fs.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7grmv2fs"/>`,
		"fallback": "zmdi:loupe",
	});
}

export default Component;

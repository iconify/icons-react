import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfbx2hb7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfbx2hb7c"/>`,
		"fallback": "streamline:interface-arrows-top-move-up-arrow-arrows",
	});
}

export default Component;

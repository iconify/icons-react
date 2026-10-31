import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arptzobve.css';
import '../../css/x/xomdi8b2s.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arptzobve"/><path class="xomdi8b2s"/>`,
		"fallback": "tabler-flags:poland",
	});
}

export default Component;

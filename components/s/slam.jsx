import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x61jlibhq.css';
import '../../css/r/r9bbvybua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x61jlibhq"/><path clip-rule="evenodd" class="r9bbvybua"/>`,
		"fallback": "token:slam",
	});
}

export default Component;

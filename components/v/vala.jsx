import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuucq2hxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuucq2hxd"/>`,
		"fallback": "simple-icons:vala",
	});
}

export default Component;

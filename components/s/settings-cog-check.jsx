import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b88-1hbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b88-1hbpa"/>`,
		"fallback": "majesticons:settings-cog-check",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhbsr1bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhbsr1bcl"/>`,
		"fallback": "uit:square-full",
	});
}

export default Component;

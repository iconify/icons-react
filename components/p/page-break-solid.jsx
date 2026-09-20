import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7u9cyb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7u9cyb1w"/>`,
		"fallback": "streamline-sharp:page-break-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iihkrub1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iihkrub1e"/>`,
		"fallback": "griddy-icons:text-clear-format",
	});
}

export default Component;

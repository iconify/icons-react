import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj9b9rbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj9b9rbwv"/>`,
		"fallback": "tabler:table-exclamation",
	});
}

export default Component;

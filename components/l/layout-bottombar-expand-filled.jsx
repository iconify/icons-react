import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvyy1sb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvyy1sb6d"/>`,
		"fallback": "tabler:layout-bottombar-expand-filled",
	});
}

export default Component;

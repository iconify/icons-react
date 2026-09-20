import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj_8-abyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj_8-abyw"/>`,
		"fallback": "tabler:layout-grid-filled",
	});
}

export default Component;

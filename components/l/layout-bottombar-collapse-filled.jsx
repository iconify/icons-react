import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx_eyaasz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx_eyaasz"/>`,
		"fallback": "tabler:layout-bottombar-collapse-filled",
	});
}

export default Component;

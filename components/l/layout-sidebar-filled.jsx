import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grp-vub5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grp-vub5p"/>`,
		"fallback": "tabler:layout-sidebar-filled",
	});
}

export default Component;

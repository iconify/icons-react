import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emr3p-0fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emr3p-0fx"/>`,
		"fallback": "tabler:layout-sidebar-right-expand-filled",
	});
}

export default Component;

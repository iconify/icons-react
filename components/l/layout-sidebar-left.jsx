import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibu1jey3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibu1jey3a"/>`,
		"fallback": "pixelarticons:layout-sidebar-left",
	});
}

export default Component;

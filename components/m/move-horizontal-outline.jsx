import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et0o79h9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et0o79h9i"/>`,
		"fallback": "solar:move-horizontal-outline",
	});
}

export default Component;

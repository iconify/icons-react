import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn_dbbb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn_dbbb9i"/>`,
		"fallback": "iconoir:pc-mouse",
	});
}

export default Component;

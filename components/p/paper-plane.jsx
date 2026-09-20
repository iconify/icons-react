import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqy_veb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqy_veb6y"/>`,
		"fallback": "meteor-icons:paper-plane",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcxm9nb7g.css';
import '../../css/o/o-c62h2ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcxm9nb7g"/><path class="o-c62h2ob"/>`,
		"fallback": "tdesign:system-location-filled",
	});
}

export default Component;

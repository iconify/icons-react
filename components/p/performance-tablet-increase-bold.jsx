import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgdd18btl.css';
import '../../css/y/y2ci2rbgk.css';
import '../../css/p/pkw90xu3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgdd18btl"/><path class="y2ci2rbgk"/><path class="pkw90xu3n"/>`,
		"fallback": "streamline-ultimate:performance-tablet-increase-bold",
	});
}

export default Component;

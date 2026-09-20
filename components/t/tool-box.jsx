import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh8istksq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh8istksq"/>`,
		"fallback": "streamline-sharp:tool-box",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3r2ddc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3r2ddc9g"/>`,
		"fallback": "ri:signal-cellular-2-fill",
	});
}

export default Component;

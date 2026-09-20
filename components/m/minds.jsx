import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdw-y-o3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdw-y-o3g"/>`,
		"fallback": "pixel:minds",
	});
}

export default Component;

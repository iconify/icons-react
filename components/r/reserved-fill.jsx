import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urz4zo7ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urz4zo7ze"/>`,
		"fallback": "ri:reserved-fill",
	});
}

export default Component;

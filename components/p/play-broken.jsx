import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy096x3fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy096x3fo"/>`,
		"fallback": "solar:play-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj-fcgjrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj-fcgjrp"/>`,
		"fallback": "noviair:square-9",
	});
}

export default Component;

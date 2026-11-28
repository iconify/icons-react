import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxskyzbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxskyzbys"/>`,
		"fallback": "noviair-light:square-arrow-up",
	});
}

export default Component;

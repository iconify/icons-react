import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv_iads2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv_iads2f"/>`,
		"fallback": "noviair:map-heart",
	});
}

export default Component;

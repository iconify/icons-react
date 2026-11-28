import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02ri5zjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n02ri5zjc"/>`,
		"fallback": "noviair-light:map-pin-heart",
	});
}

export default Component;

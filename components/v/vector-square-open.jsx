import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zax7p-bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zax7p-bre"/>`,
		"fallback": "mdi:vector-square-open",
	});
}

export default Component;

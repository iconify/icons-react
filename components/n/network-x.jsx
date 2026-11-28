import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruwa10bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruwa10bqs"/>`,
		"fallback": "noviair:network-x",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r89p1bbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r89p1bbjn"/>`,
		"fallback": "uit:left-indent-alt",
	});
}

export default Component;

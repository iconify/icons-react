import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcyn1ccfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcyn1ccfu"/>`,
		"fallback": "icon-park:left-two",
	});
}

export default Component;

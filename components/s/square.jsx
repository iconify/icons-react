import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrg8lz20a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrg8lz20a"/>`,
		"fallback": "icon-park-outline:square",
	});
}

export default Component;

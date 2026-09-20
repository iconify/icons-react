import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dch9mwb7p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dch9mwb7p"/>`,
		"fallback": "streamline:subtract-circle",
	});
}

export default Component;

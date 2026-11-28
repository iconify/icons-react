import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdr48f5mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdr48f5mp"/>`,
		"fallback": "noviair:plug-gear",
	});
}

export default Component;

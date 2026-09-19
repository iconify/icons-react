import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tne80_bgq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tne80_bgq"/>`,
		"fallback": "gis:measure-area-alt",
	});
}

export default Component;

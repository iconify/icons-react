import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggiu84btg.css';
import '../../css/p/pf2d4z5hd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggiu84btg"/><path class="pf2d4z5hd"/>`,
		"fallback": "gis:map-play",
	});
}

export default Component;

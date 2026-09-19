import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsei5obru.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsei5obru"/>`,
		"fallback": "gis:poi",
	});
}

export default Component;

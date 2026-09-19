import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v--o8dbgk.css';
import '../../css/y/yol252b6a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v--o8dbgk"/><path class="yol252b6a"/>`,
		"fallback": "gis:position-o",
	});
}

export default Component;

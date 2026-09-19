import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6b_6wars.css';
import '../../css/i/iabrmvfcy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6b_6wars"/><path class="iabrmvfcy"/>`,
		"fallback": "gis:search-layer",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-r02jbvg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-r02jbvg"/>`,
		"fallback": "gis:screen-mag-alt",
	});
}

export default Component;

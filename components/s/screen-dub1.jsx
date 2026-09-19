import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n689fv7bh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n689fv7bh"/>`,
		"fallback": "gis:screen-dub1",
	});
}

export default Component;

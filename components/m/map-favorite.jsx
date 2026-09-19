import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8-9vtl6c.css';
import '../../css/n/ng73f_8fh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8-9vtl6c"/><path class="ng73f_8fh"/>`,
		"fallback": "gis:map-favorite",
	});
}

export default Component;

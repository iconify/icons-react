import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7wez5bii.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7wez5bii"/>`,
		"fallback": "gis:poi-info",
	});
}

export default Component;

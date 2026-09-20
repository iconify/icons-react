import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7656tb7c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7656tb7c"/>`,
		"fallback": "maki:road-accident",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zon58ga2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zon58ga2c"/>`,
		"fallback": "selfhst:thingiverse-dark",
	});
}

export default Component;

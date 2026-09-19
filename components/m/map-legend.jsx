import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akbunfx0o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akbunfx0o"/>`,
		"fallback": "gis:map-legend",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc9m02b9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc9m02b9t"/>`,
		"fallback": "la:map-marker-alt",
	});
}

export default Component;

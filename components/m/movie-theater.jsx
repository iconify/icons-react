import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg3i-ab3c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg3i-ab3c"/>`,
		"fallback": "map:movie-theater",
	});
}

export default Component;

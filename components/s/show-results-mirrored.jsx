import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq1y5xbdu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq1y5xbdu"/>`,
		"fallback": "fluent-mdl2:show-results-mirrored",
	});
}

export default Component;

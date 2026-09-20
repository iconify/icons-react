import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3etm-s9c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3etm-s9c"/>`,
		"fallback": "map:search",
	});
}

export default Component;

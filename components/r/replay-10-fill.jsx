import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvizkus5c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvizkus5c"/>`,
		"fallback": "pullo:replay-10-fill",
	});
}

export default Component;

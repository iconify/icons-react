import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf39cbn8y.css';
import '../../css/u/uhsthdc5f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf39cbn8y"/><path class="uhsthdc5f"/>`,
		"fallback": "gis:map-share-alt",
	});
}

export default Component;

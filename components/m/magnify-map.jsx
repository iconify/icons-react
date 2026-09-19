import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq0i1mbem.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq0i1mbem"/>`,
		"fallback": "gis:magnify-map",
	});
}

export default Component;

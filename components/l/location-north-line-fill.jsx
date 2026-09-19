import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt0e-l7es.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt0e-l7es"/>`,
		"fallback": "f7:location-north-line-fill",
	});
}

export default Component;

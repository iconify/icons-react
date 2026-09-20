import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzh4x-bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzh4x-bjd"/>`,
		"fallback": "mingcute:partly-cloud-daytime-line",
	});
}

export default Component;

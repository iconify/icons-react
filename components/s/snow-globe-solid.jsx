import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptkb62c8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptkb62c8w"/>`,
		"fallback": "withicons:snow-globe-solid",
	});
}

export default Component;

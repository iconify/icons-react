import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kudks89uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kudks89uf"/>`,
		"fallback": "mdi:leaf-maple",
	});
}

export default Component;

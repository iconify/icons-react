import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzge0abfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzge0abfz"/>`,
		"fallback": "heroicons-solid:server",
	});
}

export default Component;

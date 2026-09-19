import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4az-pqpf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4az-pqpf"/>`,
		"fallback": "gis:rectangle-o",
	});
}

export default Component;

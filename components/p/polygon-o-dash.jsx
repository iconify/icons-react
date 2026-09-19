import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk0nhcbos.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk0nhcbos"/>`,
		"fallback": "gis:polygon-o-dash",
	});
}

export default Component;

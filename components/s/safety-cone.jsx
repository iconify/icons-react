import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh5uf0c8t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh5uf0c8t"/>`,
		"fallback": "foundation:safety-cone",
	});
}

export default Component;

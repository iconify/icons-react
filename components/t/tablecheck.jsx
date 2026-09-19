import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dymkeqbdl.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dymkeqbdl"/>`,
		"fallback": "vs:tablecheck",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o14m0cc9r.css';
import '../../css/z/z7gbrqbty.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o14m0cc9r"/><path class="z7gbrqbty"/>`,
		"fallback": "foundation:pricetag-multiple",
	});
}

export default Component;

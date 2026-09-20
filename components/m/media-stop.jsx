import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2so9dl7f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2so9dl7f"/>`,
		"fallback": "oi:media-stop",
	});
}

export default Component;

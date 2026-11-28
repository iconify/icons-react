import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncbe981cb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncbe981cb"/>`,
		"fallback": "pullo:map-pin-slash-thin",
	});
}

export default Component;

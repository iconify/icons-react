import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pimcu1bqt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pimcu1bqt"/>`,
		"fallback": "pinhead:maine-with-capital-star",
	});
}

export default Component;

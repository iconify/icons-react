import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmap0gbol.css';

const viewBox = {"width":1152,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmap0gbol"/>`,
		"fallback": "fa:tablet",
	});
}

export default Component;

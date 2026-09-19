import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bst88j9io.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bst88j9io"/>`,
		"fallback": "gis:layer-height",
	});
}

export default Component;

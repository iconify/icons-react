import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-aiilfxw.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-aiilfxw"/>`,
		"fallback": "whh:threeg",
	});
}

export default Component;

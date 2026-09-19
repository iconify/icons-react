import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr81or0jr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr81or0jr"/>`,
		"fallback": "whh:resizeverticalalt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzs09cbdc.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzs09cbdc"/>`,
		"fallback": "whh:leftborder",
	});
}

export default Component;

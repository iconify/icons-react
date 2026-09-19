import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f35rpc67l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f35rpc67l"/>`,
		"fallback": "famicons:unlink-sharp",
	});
}

export default Component;

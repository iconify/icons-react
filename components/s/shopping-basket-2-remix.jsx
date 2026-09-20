import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xscml5ysl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xscml5ysl"/>`,
		"fallback": "streamline:shopping-basket-2-remix",
	});
}

export default Component;

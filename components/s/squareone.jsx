import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs_sp7bhu.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs_sp7bhu"/>`,
		"fallback": "whh:squareone",
	});
}

export default Component;

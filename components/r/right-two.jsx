import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1f4ofbcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1f4ofbcw"/>`,
		"fallback": "icon-park-solid:right-two",
	});
}

export default Component;

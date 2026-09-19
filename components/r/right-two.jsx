import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg8ugcbdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg8ugcbdc"/>`,
		"fallback": "icon-park:right-two",
	});
}

export default Component;

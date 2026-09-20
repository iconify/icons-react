import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw6abvbbq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw6abvbbq"/>`,
		"fallback": "pinhead:six-over-water",
	});
}

export default Component;

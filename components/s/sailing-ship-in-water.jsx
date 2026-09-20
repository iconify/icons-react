import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsiosqx3n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsiosqx3n"/>`,
		"fallback": "pinhead:sailing-ship-in-water",
	});
}

export default Component;

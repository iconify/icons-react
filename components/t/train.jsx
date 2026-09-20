import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh2-3_b2n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh2-3_b2n"/>`,
		"fallback": "temaki:train",
	});
}

export default Component;

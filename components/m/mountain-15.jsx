import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b40ptn0xq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b40ptn0xq"/>`,
		"fallback": "maki:mountain-15",
	});
}

export default Component;

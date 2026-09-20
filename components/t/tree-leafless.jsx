import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv7uy3bqo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv7uy3bqo"/>`,
		"fallback": "temaki:tree-leafless",
	});
}

export default Component;

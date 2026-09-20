import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as3o3em2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as3o3em2g"/>`,
		"fallback": "maki:shoe",
	});
}

export default Component;

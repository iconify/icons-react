import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucy9gabxf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucy9gabxf"/>`,
		"fallback": "maki:religious-muslim-15",
	});
}

export default Component;

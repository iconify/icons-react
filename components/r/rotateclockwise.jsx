import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejo68-63n.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejo68-63n"/>`,
		"fallback": "whh:rotateclockwise",
	});
}

export default Component;

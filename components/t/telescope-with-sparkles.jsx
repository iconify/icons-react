import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lla-tvi3d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lla-tvi3d"/>`,
		"fallback": "pinhead:telescope-with-sparkles",
	});
}

export default Component;

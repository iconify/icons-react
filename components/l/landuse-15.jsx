import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9d4n4bid.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9d4n4bid"/>`,
		"fallback": "maki:landuse-15",
	});
}

export default Component;

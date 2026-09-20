import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x254e0blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x254e0blp"/>`,
		"fallback": "lucide:skip-forward",
	});
}

export default Component;

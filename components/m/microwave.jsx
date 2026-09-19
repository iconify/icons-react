import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tycoh_b3l.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tycoh_b3l"/>`,
		"fallback": "whh:microwave",
	});
}

export default Component;

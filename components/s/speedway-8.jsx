import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l77vapb7p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l77vapb7p"/>`,
		"fallback": "temaki:speedway-8",
	});
}

export default Component;

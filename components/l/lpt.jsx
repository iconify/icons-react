import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpp-e2bmy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpp-e2bmy"/>`,
		"fallback": "cryptocurrency:lpt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buq6-w4ux.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buq6-w4ux"/>`,
		"fallback": "pinhead:sitting-tank-toilet-with-droplet",
	});
}

export default Component;

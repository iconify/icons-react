import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiyt5-euh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiyt5-euh"/>`,
		"fallback": "mdi:mouse-off",
	});
}

export default Component;

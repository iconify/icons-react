import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0bo7qn4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0bo7qn4t"/>`,
		"fallback": "vadivam:move-up-left",
	});
}

export default Component;

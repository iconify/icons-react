import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkks6l3vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkks6l3vg"/>`,
		"fallback": "mynaui:user-x-solid",
	});
}

export default Component;

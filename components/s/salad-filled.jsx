import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4_2z6btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4_2z6btw"/>`,
		"fallback": "tabler:salad-filled",
	});
}

export default Component;

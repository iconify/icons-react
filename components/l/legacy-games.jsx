import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl0ccq7rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl0ccq7rn"/>`,
		"fallback": "thesvg:legacy-games",
	});
}

export default Component;

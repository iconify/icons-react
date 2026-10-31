import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyja_c0px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyja_c0px"/>`,
		"fallback": "withicons:rabbit-gloss",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im1ri0b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im1ri0b8y"/>`,
		"fallback": "withicons:square-dashed-gloss",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o59v4fb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o59v4fb6r"/>`,
		"fallback": "withicons:recycle-gloss",
	});
}

export default Component;

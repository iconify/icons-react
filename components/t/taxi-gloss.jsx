import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzumm9f2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzumm9f2t"/>`,
		"fallback": "withicons:taxi-gloss",
	});
}

export default Component;

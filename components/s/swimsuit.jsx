import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aztt5plod.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aztt5plod"/>`,
		"fallback": "fontisto:swimsuit",
	});
}

export default Component;

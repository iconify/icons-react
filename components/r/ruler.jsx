import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i133w3y_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i133w3y_f"/>`,
		"fallback": "vadivam:ruler",
	});
}

export default Component;

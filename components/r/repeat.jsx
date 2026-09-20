import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jewti5y4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jewti5y4w"/>`,
		"fallback": "uis:repeat",
	});
}

export default Component;

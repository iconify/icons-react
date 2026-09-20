import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooq5nrwwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooq5nrwwd"/>`,
		"fallback": "ri:lungs-fill",
	});
}

export default Component;

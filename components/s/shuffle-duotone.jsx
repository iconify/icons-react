import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndp62j9zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndp62j9zc primary"/>`,
		"fallback": "iconaut:shuffle-duotone",
	});
}

export default Component;

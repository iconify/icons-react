import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj--0qmpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj--0qmpo primary"/>`,
		"fallback": "iconaut:spiral-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd-hh9b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd-hh9b3f"/>`,
		"fallback": "stash:user-arrow-down",
	});
}

export default Component;

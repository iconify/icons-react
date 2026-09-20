import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va1ouek0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="va1ouek0l"/>`,
		"fallback": "nrk:trashcan-solid",
	});
}

export default Component;

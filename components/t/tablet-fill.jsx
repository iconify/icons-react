import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omt-n94-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="omt-n94-f"/>`,
		"fallback": "keyline-icons:tablet-fill",
	});
}

export default Component;

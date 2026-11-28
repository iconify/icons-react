import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk4lss9ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk4lss9ns"/>`,
		"fallback": "noviair-light:washing-machine",
	});
}

export default Component;

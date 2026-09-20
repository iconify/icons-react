import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smybc0d-h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smybc0d-h"/>`,
		"fallback": "jam:set-forward-circle",
	});
}

export default Component;

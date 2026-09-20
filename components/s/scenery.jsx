import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvaty4zot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvaty4zot"/>`,
		"fallback": "uit:scenery",
	});
}

export default Component;

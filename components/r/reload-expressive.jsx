import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi27grjzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi27grjzk"/>`,
		"fallback": "nrk:reload-expressive",
	});
}

export default Component;

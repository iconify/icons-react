import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb5jeabjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb5jeabjq"/>`,
		"fallback": "thesvg-color:mumble",
	});
}

export default Component;

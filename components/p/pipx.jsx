import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbn7w4b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbn7w4b-a"/>`,
		"fallback": "simple-icons:pipx",
	});
}

export default Component;

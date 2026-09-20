import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivqo2k37s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivqo2k37s"/>`,
		"fallback": "keyline-icons:panels-top-left-sharp",
	});
}

export default Component;

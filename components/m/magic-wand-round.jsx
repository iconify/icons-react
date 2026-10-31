import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eotd31bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eotd31bgi"/>`,
		"fallback": "coolicons:magic-wand-round",
	});
}

export default Component;

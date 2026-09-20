import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjs7sj05i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjs7sj05i"/>`,
		"fallback": "pixelarticons:square-chevron-left-sharp",
	});
}

export default Component;

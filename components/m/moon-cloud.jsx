import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4iqvulef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4iqvulef"/>`,
		"fallback": "streamline-sharp:moon-cloud",
	});
}

export default Component;

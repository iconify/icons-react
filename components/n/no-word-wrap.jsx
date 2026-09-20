import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gar7pzrar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gar7pzrar"/>`,
		"fallback": "streamline-sharp:no-word-wrap",
	});
}

export default Component;

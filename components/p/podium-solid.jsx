import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flktoyl8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="flktoyl8i"/>`,
		"fallback": "streamline:podium-solid",
	});
}

export default Component;

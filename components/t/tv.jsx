import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2eyd0b6f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2eyd0b6f"/>`,
		"fallback": "whh:tv",
	});
}

export default Component;

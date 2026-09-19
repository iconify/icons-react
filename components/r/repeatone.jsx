import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8q8xga_a.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8q8xga_a"/>`,
		"fallback": "whh:repeatone",
	});
}

export default Component;

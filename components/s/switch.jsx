import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icw9h6w0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icw9h6w0k"/>`,
		"fallback": "icomoon-free:switch",
	});
}

export default Component;

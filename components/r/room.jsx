import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f89bh-bhd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f89bh-bhd"/>`,
		"fallback": "pinhead:room",
	});
}

export default Component;

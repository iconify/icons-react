import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6tcv5b4d.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6tcv5b4d"/>`,
		"fallback": "whh:shredder",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbiv5db4d.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbiv5db4d"/>`,
		"fallback": "whh:skull",
	});
}

export default Component;

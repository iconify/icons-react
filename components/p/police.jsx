import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5pmp4sjw.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5pmp4sjw"/>`,
		"fallback": "whh:police",
	});
}

export default Component;

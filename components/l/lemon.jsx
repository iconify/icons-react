import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg9xyjbbb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg9xyjbbb"/>`,
		"fallback": "dinkie-icons:lemon",
	});
}

export default Component;

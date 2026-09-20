import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1lucj3yy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1lucj3yy"/>`,
		"fallback": "selfhst:rallly-light",
	});
}

export default Component;

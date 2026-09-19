import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlgm0tqek.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlgm0tqek"/>`,
		"fallback": "devicon-plain:knexjs-wordmark",
	});
}

export default Component;

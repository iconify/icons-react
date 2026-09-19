import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-_2db1i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-_2db1i"/>`,
		"fallback": "devicon-plain:solidjs-wordmark",
	});
}

export default Component;

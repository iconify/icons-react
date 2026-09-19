import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by4kbj5ev.css';
import '../../css/h/hhg6y4bgf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by4kbj5ev"/><path class="hhg6y4bgf"/>`,
		"fallback": "devicon-plain:sqlite-wordmark",
	});
}

export default Component;

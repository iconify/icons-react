import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9umplbbp.css';
import '../../css/d/d2w370kzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j9umplbbp"/><path class="d2w370kzd"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-duotone",
	});
}

export default Component;

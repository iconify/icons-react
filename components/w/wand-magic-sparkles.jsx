import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f583vc79d.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f583vc79d"/>`,
		"fallback": "fa6-solid:wand-magic-sparkles",
	});
}

export default Component;

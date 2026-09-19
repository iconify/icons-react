import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl69w69-a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl69w69-a"/>`,
		"fallback": "fa7-brands:vimeo-v",
	});
}

export default Component;

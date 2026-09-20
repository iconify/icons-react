import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-cnqeb4k.css';

const viewBox = {"width":220,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-cnqeb4k"/>`,
		"fallback": "thesvg-color:milanote-dark",
	});
}

export default Component;

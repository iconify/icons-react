import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcbk64bbo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcbk64bbo"/>`,
		"fallback": "fa7-solid:person-skating",
	});
}

export default Component;

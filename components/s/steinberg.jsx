import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkc7pb9ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkc7pb9ss"/>`,
		"fallback": "thesvg-color:steinberg",
	});
}

export default Component;

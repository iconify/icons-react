import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm2gkac6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm2gkac6w"/>`,
		"fallback": "thesvg-color:upwork",
	});
}

export default Component;

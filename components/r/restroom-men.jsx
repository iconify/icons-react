import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxwkt6myp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxwkt6myp"/>`,
		"fallback": "grommet-icons:restroom-men",
	});
}

export default Component;

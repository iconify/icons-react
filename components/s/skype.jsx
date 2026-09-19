import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp71t6fky.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp71t6fky"/>`,
		"fallback": "fa:skype",
	});
}

export default Component;

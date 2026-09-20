import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilad_8boo.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilad_8boo"/>`,
		"fallback": "wi:time-7",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jns9x8bmo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jns9x8bmo"/>`,
		"fallback": "fluent-mdl2:join-online-meeting",
	});
}

export default Component;

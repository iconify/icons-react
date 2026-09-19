import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwjw1vf0s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwjw1vf0s"/>`,
		"fallback": "fluent-mdl2:test-user-solid",
	});
}

export default Component;

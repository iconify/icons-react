import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxflr4hxk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxflr4hxk"/>`,
		"fallback": "fluent-mdl2:leave-user",
	});
}

export default Component;

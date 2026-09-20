import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c54t2hbrn.css';
import '../../css/j/jvp9h3b4s.css';
import '../../css/g/g3r25me4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c54t2hbrn"/><path class="jvp9h3b4s"/><path clip-rule="evenodd" class="g3r25me4c"/>`,
		"fallback": "token:npxs",
	});
}

export default Component;

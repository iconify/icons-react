import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujg4rdbof.css';
import '../../css/b/br8qj_t-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujg4rdbof"/><path class="br8qj_t-u"/>`,
		"fallback": "selfhst:scrobblex",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9xj9c1ac.css';
import '../../css/e/ec97ebbsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9xj9c1ac"/><path class="ec97ebbsu"/>`,
		"fallback": "selfhst:notion-mail",
	});
}

export default Component;

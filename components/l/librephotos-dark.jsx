import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8mup3byn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8mup3byn"/>`,
		"fallback": "selfhst:librephotos-dark",
	});
}

export default Component;

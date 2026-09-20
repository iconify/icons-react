import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6ckg4bnd.css';
import '../../css/d/dysu5hdsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6ckg4bnd"/><path class="dysu5hdsr"/>`,
		"fallback": "selfhst:turing-smart-screen",
	});
}

export default Component;

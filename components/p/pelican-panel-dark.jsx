import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm0jiu4yk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm0jiu4yk"/>`,
		"fallback": "selfhst:pelican-panel-dark",
	});
}

export default Component;

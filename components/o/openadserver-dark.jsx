import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4s1fkb8q.css';
import '../../css/u/ua9aj-d3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4s1fkb8q"/><path class="ua9aj-d3p"/>`,
		"fallback": "selfhst:openadserver-dark",
	});
}

export default Component;

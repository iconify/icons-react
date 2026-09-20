import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5aof5b_u.css';
import '../../css/j/joqqp9xyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5aof5b_u"/><path class="joqqp9xyt"/>`,
		"fallback": "selfhst:planning-center-groups-light",
	});
}

export default Component;

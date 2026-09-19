import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqf_9pu9i.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqf_9pu9i"/>`,
		"fallback": "whh:pushbullet",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqtyu2b2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqtyu2b2f"/>`,
		"fallback": "entypo:megaphone",
	});
}

export default Component;

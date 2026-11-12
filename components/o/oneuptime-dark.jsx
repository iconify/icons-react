import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1zc5nbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1zc5nbtf"/>`,
		"fallback": "selfhst:oneuptime-dark",
	});
}

export default Component;

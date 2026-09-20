import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deto26p-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deto26p-f"/>`,
		"fallback": "selfhst:owntracks-dark",
	});
}

export default Component;

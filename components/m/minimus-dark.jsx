import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr0pl4b-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr0pl4b-i"/>`,
		"fallback": "selfhst:minimus-dark",
	});
}

export default Component;

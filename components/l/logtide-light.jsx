import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4f65egzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4f65egzd"/>`,
		"fallback": "selfhst:logtide-light",
	});
}

export default Component;

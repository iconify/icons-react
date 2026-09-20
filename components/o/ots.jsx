import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__0lfg-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b__0lfg-e"/>`,
		"fallback": "selfhst:ots",
	});
}

export default Component;

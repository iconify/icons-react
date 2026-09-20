import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3cff8b-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3cff8b-t"/>`,
		"fallback": "selfhst:sofi",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j35tezb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j35tezb6b"/>`,
		"fallback": "selfhst:sidero-light",
	});
}

export default Component;

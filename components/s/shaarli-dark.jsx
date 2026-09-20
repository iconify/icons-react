import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_kg13bjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_kg13bjg"/>`,
		"fallback": "selfhst:shaarli-dark",
	});
}

export default Component;

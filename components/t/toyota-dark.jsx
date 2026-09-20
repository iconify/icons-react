import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz6fvbc1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz6fvbc1b"/>`,
		"fallback": "selfhst:toyota-dark",
	});
}

export default Component;

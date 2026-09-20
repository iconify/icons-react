import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqajzqbke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqajzqbke"/>`,
		"fallback": "selfhst:redlib-dark",
	});
}

export default Component;

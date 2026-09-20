import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp_sxsrwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp_sxsrwg"/>`,
		"fallback": "thesvg-color:padlet",
	});
}

export default Component;

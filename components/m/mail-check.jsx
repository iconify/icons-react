import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmu0wqbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmu0wqbvn"/>`,
		"fallback": "pixelarticons:mail-check",
	});
}

export default Component;

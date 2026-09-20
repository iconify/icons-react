import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_gavsio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_gavsio"/>`,
		"fallback": "thesvg-color:libretranslate",
	});
}

export default Component;

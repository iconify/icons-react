import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-keie.css';
import '../../css/w/w3lddg.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-keie"/><path class="w3lddg"/>`,
		"fallback": "line-md:thumbs-up-twotone",
	});
}

export default Component;

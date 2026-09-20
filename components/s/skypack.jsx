import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub_muub3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub_muub3j"/>`,
		"fallback": "thesvg:skypack",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzih8sb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzih8sb4k"/>`,
		"fallback": "iconaut:tally-1-solid",
	});
}

export default Component;

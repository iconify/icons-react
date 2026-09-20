import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkpe6tbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkpe6tbyb"/>`,
		"fallback": "pixel:sort-solid",
	});
}

export default Component;

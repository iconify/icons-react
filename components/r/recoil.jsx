import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbndu9beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbndu9beu"/>`,
		"fallback": "thesvg-color:recoil",
	});
}

export default Component;

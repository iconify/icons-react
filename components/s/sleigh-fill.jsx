import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynj00dlie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynj00dlie"/>`,
		"fallback": "mingcute:sleigh-fill",
	});
}

export default Component;

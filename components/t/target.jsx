import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm938g6of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm938g6of"/>`,
		"fallback": "noviair:target",
	});
}

export default Component;

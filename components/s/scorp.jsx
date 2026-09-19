import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxi-gcmxi.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxi-gcmxi"/>`,
		"fallback": "fontisto:scorp",
	});
}

export default Component;

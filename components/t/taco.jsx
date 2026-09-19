import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h80q1pbzw.css';
import '../../css/a/a-pyxqjuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h80q1pbzw"/><path class="a-pyxqjuq"/>`,
		"fallback": "boxicons:taco",
	});
}

export default Component;

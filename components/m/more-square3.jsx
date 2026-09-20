import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmxebib_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmxebib_l"/>`,
		"fallback": "reicon:more-square3",
	});
}

export default Component;

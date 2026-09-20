import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbv32g4cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbv32g4cc"/>`,
		"fallback": "thesvg-color:slint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fff9xgdso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fff9xgdso"/>`,
		"fallback": "thesvg-color:runkit",
	});
}

export default Component;

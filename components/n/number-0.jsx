import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exbi6cc1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exbi6cc1f"/>`,
		"fallback": "ri:number-0",
	});
}

export default Component;

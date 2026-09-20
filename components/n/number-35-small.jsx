import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3-sldb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3-sldb6t"/>`,
		"fallback": "tabler:number-35-small",
	});
}

export default Component;

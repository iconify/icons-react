import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1xm83wsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1xm83wsd"/>`,
		"fallback": "tabler:number-24-small",
	});
}

export default Component;

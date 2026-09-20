import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkvyznc6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkvyznc6z"/>`,
		"fallback": "tabler:number-2-small",
	});
}

export default Component;

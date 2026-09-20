import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7qajsb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7qajsb-y"/>`,
		"fallback": "tabler:number-48-small",
	});
}

export default Component;

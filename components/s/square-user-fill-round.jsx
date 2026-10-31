import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ve0sbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-ve0sbes"/>`,
		"fallback": "coolicons:square-user-fill-round",
	});
}

export default Component;

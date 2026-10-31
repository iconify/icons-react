import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fns7kab-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fns7kab-k"/>`,
		"fallback": "coolicons:table-plus-corner-fill-round",
	});
}

export default Component;

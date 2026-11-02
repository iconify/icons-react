import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyq65nbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyq65nbcb"/>`,
		"fallback": "mingcute:phone-incoming-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppj4wo0ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppj4wo0ul"/>`,
		"fallback": "tabler:signal-5g",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5pt9r29x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5pt9r29x"/>`,
		"fallback": "hugeicons:victory-finger-01",
	});
}

export default Component;

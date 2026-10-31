import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo4h3mbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo4h3mbdw"/>`,
		"fallback": "coolicons:phone-off-fill-round",
	});
}

export default Component;

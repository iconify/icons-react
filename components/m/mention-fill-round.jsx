import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0_od9bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0_od9bys"/>`,
		"fallback": "coolicons:mention-fill-round",
	});
}

export default Component;

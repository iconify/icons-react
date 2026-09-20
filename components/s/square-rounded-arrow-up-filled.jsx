import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrbp2tvgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrbp2tvgq"/>`,
		"fallback": "tabler:square-rounded-arrow-up-filled",
	});
}

export default Component;

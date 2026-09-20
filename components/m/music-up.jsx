import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1s-ffbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1s-ffbsh"/>`,
		"fallback": "tabler:music-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrq7r-bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrq7r-bsr"/>`,
		"fallback": "tabler:submarine",
	});
}

export default Component;

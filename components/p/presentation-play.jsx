import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqc2nfbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqc2nfbnt"/>`,
		"fallback": "uil:presentation-play",
	});
}

export default Component;

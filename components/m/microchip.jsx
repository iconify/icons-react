import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_q3ok0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw_q3ok0a"/>`,
		"fallback": "prime:microchip",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itjmgykbd.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itjmgykbd"/>`,
		"fallback": "jam:universe",
	});
}

export default Component;

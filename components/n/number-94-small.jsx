import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyjk4jbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyjk4jbti"/>`,
		"fallback": "tabler:number-94-small",
	});
}

export default Component;

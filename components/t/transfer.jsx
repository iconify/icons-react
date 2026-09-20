import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vry1uwwsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vry1uwwsx"/>`,
		"fallback": "tabler:transfer",
	});
}

export default Component;

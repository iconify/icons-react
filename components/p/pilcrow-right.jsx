import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvo9sobje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvo9sobje"/>`,
		"fallback": "tabler:pilcrow-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd679kpub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd679kpub"/>`,
		"fallback": "withicons:tooth-gloss",
	});
}

export default Component;

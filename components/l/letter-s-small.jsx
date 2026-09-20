import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q51aqy70n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q51aqy70n"/>`,
		"fallback": "tabler:letter-s-small",
	});
}

export default Component;

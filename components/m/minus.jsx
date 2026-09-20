import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn9mlm2hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn9mlm2hc"/>`,
		"fallback": "mdi-light:minus",
	});
}

export default Component;

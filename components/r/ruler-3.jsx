import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ch6u7ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4ch6u7ff"/>`,
		"fallback": "tabler:ruler-3",
	});
}

export default Component;

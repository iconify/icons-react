import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmx4v4cbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmx4v4cbv"/>`,
		"fallback": "withicons:kite-gloss",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_vv7b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs_vv7b9z"/>`,
		"fallback": "coolicons:rows-duocolor-round",
	});
}

export default Component;

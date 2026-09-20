import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-zu4_btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-zu4_btx"/>`,
		"fallback": "tabler:rectangle-vertical",
	});
}

export default Component;

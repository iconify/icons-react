import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd382hb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd382hb5r"/>`,
		"fallback": "tabler:logic-xor",
	});
}

export default Component;

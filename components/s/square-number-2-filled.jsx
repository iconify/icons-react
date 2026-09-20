import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk6_zlb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk6_zlb3g"/>`,
		"fallback": "tabler:square-number-2-filled",
	});
}

export default Component;

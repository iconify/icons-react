import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lob-de45c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lob-de45c"/>`,
		"fallback": "tabler:letter-l-small",
	});
}

export default Component;

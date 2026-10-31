import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8mempy0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8mempy0c"/>`,
		"fallback": "coolicons:phone-call-fill-round",
	});
}

export default Component;

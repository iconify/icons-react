import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpy49rhyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpy49rhyg"/>`,
		"fallback": "coolicons:letter-d-duotone-round",
	});
}

export default Component;

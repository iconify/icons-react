import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq4h2u3rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq4h2u3rg"/>`,
		"fallback": "simple-icons:processon",
	});
}

export default Component;

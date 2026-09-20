import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g69n6e39t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g69n6e39t"/>`,
		"fallback": "uit:shield-check",
	});
}

export default Component;

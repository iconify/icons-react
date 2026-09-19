import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ni3xu8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-ni3xu8i"/>`,
		"fallback": "cbi:panel-glass-door-4-locked",
	});
}

export default Component;

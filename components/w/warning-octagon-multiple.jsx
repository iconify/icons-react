import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-5s4sbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-5s4sbum"/>`,
		"fallback": "ix:warning-octagon-multiple",
	});
}

export default Component;

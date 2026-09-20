import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqkqm2b7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqkqm2b7u"/>`,
		"fallback": "streamline-flex-color:magic-wand-1",
	});
}

export default Component;

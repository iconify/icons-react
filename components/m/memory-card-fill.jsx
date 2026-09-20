import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6k831oie.css';
import '../../css/r/rzbbq-lyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6k831oie"/><path class="rzbbq-lyc"/>`,
		"fallback": "mage:memory-card-fill",
	});
}

export default Component;

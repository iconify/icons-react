import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plkj6024y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plkj6024y"/>`,
		"fallback": "streamline-sharp:loop-1",
	});
}

export default Component;

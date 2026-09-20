import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3hwloalo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3hwloalo"/>`,
		"fallback": "streamline:volume-level-off-remix",
	});
}

export default Component;

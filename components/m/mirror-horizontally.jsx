import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txzvtkb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txzvtkb1s"/>`,
		"fallback": "streamline-sharp:mirror-horizontally",
	});
}

export default Component;

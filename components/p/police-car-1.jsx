import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwoh2zb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwoh2zb5p"/>`,
		"fallback": "streamline-cyber:police-car-1",
	});
}

export default Component;

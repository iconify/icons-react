import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns8hzw0md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns8hzw0md"/>`,
		"fallback": "streamline-cyber:phone-silent",
	});
}

export default Component;

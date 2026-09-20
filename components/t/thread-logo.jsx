import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi3905b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi3905b7n"/>`,
		"fallback": "streamline-logos:thread-logo",
	});
}

export default Component;

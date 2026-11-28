import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwh3sic_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwh3sic_y"/>`,
		"fallback": "noviair:message-x",
	});
}

export default Component;

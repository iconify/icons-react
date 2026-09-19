import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6ff4bus.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw6ff4bus"/>`,
		"fallback": "dinkie-icons:keycap-digit-zero",
	});
}

export default Component;

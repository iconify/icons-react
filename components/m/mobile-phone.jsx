import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl2u17qzx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl2u17qzx"/>`,
		"fallback": "dinkie-icons:mobile-phone",
	});
}

export default Component;

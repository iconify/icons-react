import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo2e3-i0j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo2e3-i0j"/>`,
		"fallback": "dinkie-icons:keycap-asterisk-filled",
	});
}

export default Component;

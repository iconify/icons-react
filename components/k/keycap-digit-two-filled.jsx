import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk3hwbdsw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk3hwbdsw"/>`,
		"fallback": "dinkie-icons:keycap-digit-two-filled",
	});
}

export default Component;

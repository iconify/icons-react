import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mij0540oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mij0540oh"/>`,
		"fallback": "iconoir:rhombus",
	});
}

export default Component;

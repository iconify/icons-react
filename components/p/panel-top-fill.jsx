import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_ta8tb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_ta8tb1s"/>`,
		"fallback": "keyline-icons:panel-top-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcw_m1lcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcw_m1lcd"/>`,
		"fallback": "thesvg:mamba-ui",
	});
}

export default Component;

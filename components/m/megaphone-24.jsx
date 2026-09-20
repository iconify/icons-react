import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkw1mrb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkw1mrb_c"/>`,
		"fallback": "octicon:megaphone-24",
	});
}

export default Component;

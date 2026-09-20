import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctnit8fnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctnit8fnk"/>`,
		"fallback": "simple-icons:vonage",
	});
}

export default Component;

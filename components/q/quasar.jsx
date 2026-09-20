import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aree9-bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aree9-bxk"/>`,
		"fallback": "thesvg-color:quasar",
	});
}

export default Component;

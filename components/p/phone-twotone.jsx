import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7lyzw.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7lyzw"/>`,
		"fallback": "line-md:phone-twotone",
	});
}

export default Component;

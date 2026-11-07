import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6agol35u.css';
import '../../css/p/pd8yij20i.css';
import '../../css/e/e70d0jzgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6agol35u"/><path class="pd8yij20i"/><path clip-rule="evenodd" class="e70d0jzgw"/>`,
		"fallback": "solar:panels-top-left-bold",
	});
}

export default Component;

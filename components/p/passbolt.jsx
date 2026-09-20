import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnepxqa4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnepxqa4c"/>`,
		"fallback": "simple-icons:passbolt",
	});
}

export default Component;

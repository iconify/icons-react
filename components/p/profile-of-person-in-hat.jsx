import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp09bcbvv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp09bcbvv"/>`,
		"fallback": "pinhead:profile-of-person-in-hat",
	});
}

export default Component;

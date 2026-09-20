import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct9hup_mh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct9hup_mh"/>`,
		"fallback": "pinhead:person-standing-holding-cane",
	});
}

export default Component;

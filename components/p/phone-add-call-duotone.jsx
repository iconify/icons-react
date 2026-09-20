import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb7_855gm.css';
import '../../css/j/je8l8cb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb7_855gm"/><path class="je8l8cb1p"/>`,
		"fallback": "si:phone-add-call-duotone",
	});
}

export default Component;

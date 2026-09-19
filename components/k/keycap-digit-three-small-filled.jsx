import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et3bhob1i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et3bhob1i"/>`,
		"fallback": "dinkie-icons:keycap-digit-three-small-filled",
	});
}

export default Component;

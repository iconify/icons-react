import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc806c_2l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc806c_2l"/>`,
		"fallback": "dinkie-icons:keycap-digit-five-small-filled",
	});
}

export default Component;

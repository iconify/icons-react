import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0hwpkaar.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0hwpkaar"/>`,
		"fallback": "dinkie-icons:keycap-asterisk",
	});
}

export default Component;

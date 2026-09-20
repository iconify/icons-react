import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suhmrh7ry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suhmrh7ry"/>`,
		"fallback": "selfhst:shoko-server-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opfvhq6uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opfvhq6uh"/>`,
		"fallback": "hugeicons:lantern",
	});
}

export default Component;
